(function () {
  "use strict";

  var tienda = window.PAPELITO;
  var app = document.getElementById("app");
  var CLAVE = "papelito-pedido";
  var CLAVE_DATOS = "papelito-datos";
  var COLORES = { coral: "--coral", mantequilla: "--mantequilla", malva: "--malva", agua: "--agua", flor: "--flor" };
  var moneda = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
  var MENOS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
  var MAS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12M8 2v12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
  var TIJERAS = '<svg aria-hidden="true"><use href="#tijeras"/></svg>';

  var productos = {};
  tienda.productos.forEach(function (p) { productos[p.id] = p; });
  var categorias = {};
  tienda.categorias.forEach(function (c) { categorias[c.id] = c; });

  /* Utilidades */
  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function color(p) {
    var c = categorias[p.categoria];
    return "var(" + (c ? COLORES[c.color] : "--papel") + ")";
  }
  function precio(n) { return moneda.format(n); }
  function avisar(t) { document.getElementById("vivo").textContent = t; }

  /* Pedido guardado en este navegador */
  function leer(clave, porDefecto) {
    try {
      var v = JSON.parse(localStorage.getItem(clave));
      return v && typeof v === "object" ? v : porDefecto;
    } catch (e) { return porDefecto; }
  }
  function escribir(clave, v) {
    try { localStorage.setItem(clave, JSON.stringify(v)); } catch (e) { /* el pedido sigue funcionando durante la visita */ }
  }
  var pedido = leer(CLAVE, {});
  Object.keys(pedido).forEach(function (id) {
    var p = productos[id];
    if (!p || p.agotado || !(pedido[id] > 0)) delete pedido[id];
  });

  function unidades() {
    return Object.keys(pedido).reduce(function (s, id) { return s + pedido[id]; }, 0);
  }
  function total() {
    return Object.keys(pedido).reduce(function (s, id) { return s + pedido[id] * productos[id].precio; }, 0);
  }
  function fijar(id, n) {
    if (n > 0) pedido[id] = Math.min(n, 99); else delete pedido[id];
    escribir(CLAVE, pedido);
    actualizarCuenta();
  }
  function actualizarCuenta(saltar) {
    var n = unidades();
    var cuenta = document.getElementById("cuenta");
    cuenta.textContent = n;
    document.getElementById("barraCuenta").textContent = n + (n === 1 ? " producto" : " productos") + " · " + precio(total());
    document.getElementById("barra").hidden = n === 0;
    document.body.classList.toggle("con-barra", n > 0 && location.hash !== "#/pedido");
    if (saltar) {
      cuenta.classList.remove("salta");
      void cuenta.offsetWidth;
      cuenta.classList.add("salta");
    }
  }

  /* Piezas */
  function selector(p, etiqueta) {
    var n = pedido[p.id] || 0;
    if (p.agotado) return '<p class="agotado">Agotado</p>';
    if (!n) return '<button class="btn" type="button" data-agregar="' + esc(p.id) + '">' + (etiqueta || "Agregar") + '<span class="sr"> ' + esc(p.nombre) + "</span></button>";
    return cantidad(p, n);
  }
  function cantidad(p, n) {
    return '<div class="cant" role="group" aria-label="Cantidad de ' + esc(p.nombre) + '">' +
      '<button type="button" data-restar="' + esc(p.id) + '" aria-label="Quitar uno">' + MENOS + "</button>" +
      "<output>" + n + "</output>" +
      '<button type="button" data-sumar="' + esc(p.id) + '" aria-label="Agregar uno">' + MAS + "</button></div>";
  }
  function valorPrecio(p) {
    return precio(p.precio) + (p.muestra ? " <small>ejemplo</small>" : "");
  }
  function celda(p) {
    var ruta = "#/producto/" + encodeURIComponent(p.id);
    return '<article class="corte" data-id="' + esc(p.id) + '">' +
      '<a class="foto" href="' + ruta + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.imagen) + '" alt="" width="400" height="400" loading="lazy"></a>' +
      '<div class="datos"><h3><a href="' + ruta + '">' + esc(p.nombre) + "</a></h3>" +
      '<div class="compra"><p class="precio">' + valorPrecio(p) + "</p>" +
      '<div class="accion" data-accion="' + esc(p.id) + '">' + selector(p) + "</div></div></div></article>";
  }
  /* Recortes con la flor: completan la lámina para que no queden huecos, con cualquier cantidad de productos */
  function recortes(n) {
    var escritorio = (4 - (n + 1) % 4) % 4, telefono = n % 2, html = "";
    for (var i = 0; i < Math.max(escritorio, telefono); i++) {
      html += '<div class="resto' + (i < escritorio ? " resto--d" : "") + (i < telefono ? " resto--m" : "") + '" aria-hidden="true"><img src="img/flor.svg" alt="" width="72" height="72"></div>';
    }
    return html;
  }
  function refrescarSelectores(id) {
    document.querySelectorAll('[data-accion="' + id + '"]').forEach(function (nodo) {
      nodo.innerHTML = selector(productos[id], nodo.getAttribute("data-etiqueta"));
    });
  }

  /* Pantallas */
  function inicio() {
    document.title = "Papelito | Papelería creativa, regalos y juegos en Santiago";
    var html = '<h1 class="sr">Papelito: papelería creativa, regalos, recuerdos, juegos y pintura</h1>';
    tienda.categorias.forEach(function (c) {
      var lista = tienda.productos.filter(function (p) { return p.categoria === c.id; });
      if (!lista.length) return;
      html += '<section class="lamina" id="' + esc(c.id) + '" style="--c:var(' + COLORES[c.color] + ')" aria-labelledby="t-' + esc(c.id) + '">' +
        '<div class="grilla"><div class="titulo"><h2 id="t-' + esc(c.id) + '">' + esc(c.nombre) + "</h2>" + TIJERAS + "</div>" +
        lista.map(celda).join("") + recortes(lista.length) + "</div></section>";
    });
    app.innerHTML = html;
  }

  function ficha(id) {
    var p = productos[id];
    if (!p) return noEncontrado();
    var c = categorias[p.categoria];
    document.title = p.nombre + " | Papelito";
    app.innerHTML = '<article class="ficha" style="--c:' + color(p) + '" data-id="' + esc(p.id) + '">' +
      '<a class="volver" href="#/categoria/' + esc(p.categoria) + '">Volver a ' + esc(c ? c.corto : "la tienda") + "</a>" +
      '<div class="ficha__grilla"><div class="ficha__foto"><img src="' + esc(p.imagen) + '" alt="' + esc(p.nombre) + '" width="400" height="400"></div>' +
      "<div><h1>" + esc(p.nombre) + '</h1><p class="precio">' + valorPrecio(p) + "</p>" +
      '<p class="ficha__desc">' + esc(p.descripcion) + "</p>" +
      '<div class="ficha__accion accion" data-accion="' + esc(p.id) + '" data-etiqueta="Agregar a mi pedido">' + selector(p, "Agregar a mi pedido") + "</div></div></div></article>";
  }

  function noEncontrado() {
    document.title = "Producto no encontrado | Papelito";
    app.innerHTML = '<div class="vacio"><h1>No encontramos este producto</h1><p>Puede que ya no esté disponible.</p><a href="#/">Ver todos los productos</a></div>';
  }

  var datos = leer(CLAVE_DATOS, { entrega: "retiro" });
  var enviado = false;

  function vistaPedido() {
    document.title = "Mi pedido | Papelito";
    var ids = Object.keys(pedido);
    if (!ids.length) {
      enviado = false;
      app.innerHTML = '<div class="vacio"><h1>Tu pedido está vacío</h1><p>Cuando agregues un producto, aparecerá aquí.</p><a href="#/">Ver los productos</a></div>';
      return;
    }
    var hayNumero = numero() !== "";
    var despacho = datos.entrega === "despacho";
    app.innerHTML = '<div class="pedido"><h1>Mi pedido</h1>' +
      (hayNumero ? "" : '<p class="pendiente">Todavía no estamos recibiendo pedidos por este sitio.</p>') +
      '<form id="form" novalidate><div class="talon">' +
      '<section aria-label="Productos"><div id="lineas">' + ids.map(linea).join("") + "</div>" +
      '<p class="total"><span>Total productos</span><span id="total">' + precio(total()) + "</span></p>" +
      '<p class="nota">El pago es por transferencia.</p>' +
      '<p class="nota" id="notaDespacho"' + (despacho ? "" : " hidden") + ">El costo del despacho se confirma por WhatsApp, antes de pagar.</p></section>" +
      '<section><h2>¿Cómo lo recibes?</h2>' +
      '<fieldset class="opciones"><legend class="sr">Forma de entrega</legend>' +
      '<label class="opcion"><input type="radio" name="entrega" value="retiro"' + (despacho ? "" : " checked") + "> Retiro en Santiago</label>" +
      '<label class="opcion"><input type="radio" name="entrega" value="despacho"' + (despacho ? " checked" : "") + "> Despacho</label></fieldset>" +
      '<p class="nota" id="notaRetiro"' + (despacho ? " hidden" : "") + ">El lugar y el horario del retiro se coordinan por WhatsApp.</p>" +
      campo("nombre", "Tu nombre", "name") +
      '<div id="camposDespacho"' + (despacho ? "" : " hidden") + ">" + campo("direccion", "Dirección", "street-address") + campo("comuna", "Comuna", "address-level2") + "</div>" +
      '</section><div class="enviar">' +
      (hayNumero
        ? '<button class="btn btn--grande" type="submit">Enviar pedido por WhatsApp</button>'
        : '<button class="btn btn--grande" type="button" disabled>Enviar pedido por WhatsApp</button>') +
      '</div><svg class="talon__tijeras" aria-hidden="true"><use href="#tijeras"/></svg></div>' +
      '<div class="tras-envio">' + (hayNumero ? '<p class="nota">Se abrirá WhatsApp con tu pedido escrito.</p>' : "") +
      '<div id="enviado"></div></div></form></div>';
    if (enviado) mostrarEnviado();
  }

  function campo(id, etiqueta, auto) {
    return '<label class="campo"><span>' + etiqueta + '</span><input id="' + id + '" name="' + id + '" type="text" autocomplete="' + auto + '" maxlength="120" required value="' + esc(datos[id] || "") + '" aria-describedby="error-' + id + '"><small class="error" id="error-' + id + '" hidden></small></label>';
  }

  function linea(id) {
    var p = productos[id];
    var n = pedido[id];
    return '<div class="linea" data-linea="' + esc(id) + '" style="--c:' + color(p) + '">' +
      '<div class="linea__foto"><img src="' + esc(p.imagen) + '" alt="" width="64" height="64"></div>' +
      '<p class="linea__nombre"><a href="#/producto/' + encodeURIComponent(id) + '">' + esc(p.nombre) + "</a></p>" +
      '<p class="linea__subtotal">' + precio(n * p.precio) + "</p>" +
      cantidad(p, n) +
      '<button class="enlace linea__quitar" type="button" data-quitar="' + esc(id) + '">Quitar<span class="sr"> ' + esc(p.nombre) + "</span></button></div>";
  }

  function numero() { return String(tienda.whatsapp || "").replace(/\D/g, ""); }

  function mensaje() {
    var lineas = ["Hola Papelito, quiero hacer este pedido:", ""];
    Object.keys(pedido).forEach(function (id) {
      var p = productos[id];
      lineas.push("- " + pedido[id] + " x " + p.nombre + (p.muestra ? " (ejemplo)" : "") + ": " + precio(pedido[id] * p.precio));
    });
    lineas.push("", "Total productos: " + precio(total()), "", "Nombre: " + datos.nombre.trim());
    if (datos.entrega === "despacho") {
      lineas.push("Entrega: despacho", "Dirección: " + datos.direccion.trim() + ", " + datos.comuna.trim());
    } else {
      lineas.push("Entrega: retiro en Santiago");
    }
    lineas.push("Pago: transferencia");
    return lineas.join("\n");
  }
  function urlWhatsApp() { return "https://wa.me/" + numero() + "?text=" + encodeURIComponent(mensaje()); }

  function mostrarEnviado() {
    var nodo = document.getElementById("enviado");
    if (!nodo) return;
    nodo.innerHTML = '<div class="enviado" role="status"><p><strong>Revisa WhatsApp y presiona enviar.</strong> El pedido se confirma cuando llegue ese mensaje.</p>' +
      '<p><a href="' + esc(urlWhatsApp()) + '" target="_blank" rel="noopener">Abrir WhatsApp de nuevo</a></p>' +
      '<p><button class="enlace" type="button" data-vaciar>Ya lo envié, vaciar mi pedido</button></p></div>';
  }

  function validar() {
    var ids = datos.entrega === "despacho" ? ["nombre", "direccion", "comuna"] : ["nombre"];
    var msgs = { nombre: "Escribe tu nombre para saber a quién responder.", direccion: "Escribe la dirección para el despacho.", comuna: "Escribe la comuna para confirmar el despacho." };
    var primero = null;
    ["nombre", "direccion", "comuna"].forEach(function (id) {
      var input = document.getElementById(id);
      var error = document.getElementById("error-" + id);
      var malo = ids.indexOf(id) >= 0 && !input.value.trim();
      input.setAttribute("aria-invalid", malo ? "true" : "false");
      error.hidden = !malo;
      error.textContent = malo ? msgs[id] : "";
      if (malo && !primero) primero = input;
    });
    if (primero) primero.focus();
    return !primero;
  }

  /* El recorte: las tijeras del logo siguen la línea punteada del producto */
  function sinMovimiento() { return matchMedia("(prefers-reduced-motion: reduce)").matches; }

  function recortar(cel, alTerminar) {
    if (sinMovimiento() || !cel.animate) { alTerminar(); return; }
    var w = cel.offsetWidth, h = cel.offsetHeight;
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "trazo");
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M0 0H" + w + "V" + h + "H0Z");
    svg.appendChild(path);
    var tij = document.createElement("div");
    tij.className = "trazo-tijeras";
    tij.innerHTML = '<svg width="30" height="30" aria-hidden="true"><use href="#tijeras"/></svg>';
    cel.appendChild(svg);
    cel.appendChild(tij);
    var largo = path.getTotalLength();
    path.style.strokeDasharray = largo;
    path.style.strokeDashoffset = largo;
    var dur = 620, ini = performance.now();
    function paso(t) {
      var x = Math.max(0, Math.min((t - ini) / dur, 1));
      var d = largo * (1 - Math.pow(1 - x, 2.4));
      var a = path.getPointAtLength(d), b = path.getPointAtLength(Math.min(d + 1, largo));
      var giro = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
      path.style.strokeDashoffset = largo - d;
      tij.style.transform = "translate(" + a.x + "px," + a.y + "px) rotate(" + (giro + Math.sin(x * 40) * 8) + "deg)";
      if (x < 1) { requestAnimationFrame(paso); return; }
      tij.remove();
      svg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240 }).onfinish = function () { svg.remove(); };
      alTerminar();
    }
    requestAnimationFrame(paso);
  }

  function volar(cel, id) {
    var img = cel.querySelector("img");
    var barra = document.getElementById("barra");
    var destino = getComputedStyle(barra).display !== "none" ? barra : document.getElementById("cuenta");
    if (!img || sinMovimiento()) { actualizarCuenta(true); return; }
    var o = img.getBoundingClientRect(), d = destino.getBoundingClientRect();
    if (!o.width) { actualizarCuenta(true); return; }
    var n = document.createElement("div");
    n.className = "volando";
    n.style.cssText = "left:" + o.left + "px;top:" + o.top + "px;width:" + o.width + "px;height:" + o.height + "px;--c:" + color(productos[id]);
    n.innerHTML = '<img src="' + esc(productos[id].imagen) + '" alt="">';
    document.body.appendChild(n);
    var dx = d.left + d.width / 2 - (o.left + o.width / 2), dy = d.top + d.height / 2 - (o.top + o.height / 2);
    n.animate([
      { transform: "none", opacity: 1 },
      { transform: "translate(" + dx * 0.35 + "px," + (dy * 0.35 - 24) + "px) rotate(-6deg) scale(.6)", opacity: 1, offset: 0.45 },
      { transform: "translate(" + dx + "px," + dy + "px) rotate(8deg) scale(.08)", opacity: 0.7 }
    ], { duration: 520, easing: "cubic-bezier(.45,.05,.3,1)" }).onfinish = function () {
      n.remove();
      actualizarCuenta(true);
    };
  }

  function agregar(id, boton) {
    var cel = boton.closest(".corte");
    fijar(id, 1);
    refrescarSelectores(id);
    avisar(productos[id].nombre + " agregado a tu pedido.");
    var mas = document.querySelector('[data-accion="' + id + '"] [data-sumar]');
    if (mas) mas.focus();
    if (cel) recortar(cel, function () { volar(cel, id); });
    else actualizarCuenta(true);
  }

  function cambiar(id, n) {
    fijar(id, n);
    avisar(n > 0 ? productos[id].nombre + ": " + n : productos[id].nombre + " quitado de tu pedido.");
    if (location.hash !== "#/pedido") { refrescarSelectores(id); return; }
    if (!unidades()) { vistaPedido(); app.focus({ preventScroll: true }); return; }
    var fila = document.querySelector('[data-linea="' + id + '"]');
    if (n > 0) {
      fila.querySelector("output").textContent = n;
      fila.querySelector(".linea__subtotal").textContent = precio(n * productos[id].precio);
    } else {
      fila.remove();
    }
    document.getElementById("total").textContent = precio(total());
    if (enviado) mostrarEnviado();
  }

  function restaurarFoco(tipo, id) {
    var nodo = document.querySelector("[data-" + tipo + '="' + id + '"]') ||
      document.querySelector('[data-agregar="' + id + '"]') ||
      document.querySelector("#lineas button");
    if (nodo) nodo.focus();
  }

  /* Eventos */
  document.addEventListener("click", function (ev) {
    var enlace = ev.target.closest("a[href^='#/']");
    if (enlace && enlace.getAttribute("href") === location.hash) { ruta(); return; }
    var b = ev.target.closest("button");
    if (!b) return;
    var d = b.dataset;
    if (d.agregar) agregar(d.agregar, b);
    else if (d.sumar) { cambiar(d.sumar, (pedido[d.sumar] || 0) + 1); restaurarFoco("sumar", d.sumar); }
    else if (d.restar) { cambiar(d.restar, (pedido[d.restar] || 0) - 1); restaurarFoco("restar", d.restar); }
    else if (d.quitar) { cambiar(d.quitar, 0); restaurarFoco("quitar", d.quitar); }
    else if ("vaciar" in d) {
      pedido = {};
      enviado = false;
      escribir(CLAVE, pedido);
      actualizarCuenta();
      vistaPedido();
      app.focus({ preventScroll: true });
    }
  });

  document.addEventListener("change", function (ev) {
    if (ev.target.name !== "entrega") return;
    datos.entrega = ev.target.value;
    escribir(CLAVE_DATOS, datos);
    var despacho = datos.entrega === "despacho";
    document.getElementById("camposDespacho").hidden = !despacho;
    document.getElementById("notaRetiro").hidden = despacho;
    document.getElementById("notaDespacho").hidden = !despacho;
    if (enviado) mostrarEnviado();
  });
  document.addEventListener("input", function (ev) {
    var id = ev.target.id;
    if (id !== "nombre" && id !== "direccion" && id !== "comuna") return;
    datos[id] = ev.target.value;
    escribir(CLAVE_DATOS, datos);
    if (enviado) mostrarEnviado();
  });
  document.addEventListener("submit", function (ev) {
    if (ev.target.id !== "form") return;
    ev.preventDefault();
    if (!numero() || !validar()) return;
    window.open(urlWhatsApp(), "_blank", "noopener");
    enviado = true;
    mostrarEnviado();
  });

  /* Navegación */
  var enInicio = false;
  function ruta() {
    var h = location.hash;
    if (h === "#app") { app.focus(); return; }
    var m, categoria = null, alInicio = false;
    if ((m = h.match(/^#\/producto\/(.+)$/))) ficha(decodeURIComponent(m[1]));
    else if (h === "#/pedido") vistaPedido();
    else {
      alInicio = true;
      if ((m = h.match(/^#\/categoria\/(.+)$/))) categoria = decodeURIComponent(m[1]);
      if (!enInicio) inicio();
    }
    enInicio = alInicio;
    actualizarCuenta();
    var destino = categoria && document.getElementById(categoria);
    if (destino) destino.scrollIntoView();
    else window.scrollTo(0, 0);
    if (h) app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", ruta);

  /* Inicio */
  document.getElementById("cats").innerHTML = tienda.categorias.map(function (c) {
    return '<a href="#/categoria/' + esc(c.id) + '" style="--c:var(' + COLORES[c.color] + ')">' + esc(c.corto) + "</a>";
  }).join("");
  document.getElementById("aviso").hidden = !tienda.productos.some(function (p) { return p.muestra; });
  var contacto = [];
  if (tienda.correo) contacto.push('<a href="mailto:' + esc(tienda.correo) + '">' + esc(tienda.correo) + "</a>");
  if (tienda.instagram) contacto.push('<a href="' + esc(tienda.instagram) + '" target="_blank" rel="noopener">Instagram @papelito.br</a>');
  document.getElementById("pieInstagram").innerHTML = contacto.join(" · ");
  ruta();
})();
