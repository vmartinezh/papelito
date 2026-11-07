(function () {
  "use strict";

  var tienda = window.PAPELITO;
  var app = document.getElementById("app");
  var CLAVE = "papelito-pedido";
  var CLAVE_DATOS = "papelito-datos";
  var moneda = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
  var MENOS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var MAS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12M8 2v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

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
    cuenta.hidden = n === 0;
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
  function cantidad(p, n) {
    return '<div class="cant" role="group" aria-label="Cantidad de ' + esc(p.nombre) + '">' +
      '<button type="button" data-restar="' + esc(p.id) + '" aria-label="Quitar uno">' + MENOS + "</button>" +
      "<output>" + n + "</output>" +
      '<button type="button" data-sumar="' + esc(p.id) + '" aria-label="Agregar uno">' + MAS + "</button></div>";
  }
  function selector(p, grande) {
    var n = pedido[p.id] || 0;
    if (p.agotado) return '<p class="agotado">Agotado</p>';
    if (n) return cantidad(p, n);
    if (grande) return '<button class="btn" type="button" data-agregar="' + esc(p.id) + '">Agregar a mi pedido</button>';
    return '<button class="agregar" type="button" data-agregar="' + esc(p.id) + '">+ Agregar<span class="sr"> ' + esc(p.nombre) + "</span></button>";
  }
  function valorPrecio(p) {
    return precio(p.precio) + (p.muestra ? " <small>ejemplo</small>" : "");
  }
  function celda(p) {
    var ruta = "#/producto/" + encodeURIComponent(p.id);
    return '<article class="producto">' +
      '<a class="foto" href="' + ruta + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.imagen) + '" alt="" width="600" height="600" loading="lazy"></a>' +
      '<h3><a href="' + ruta + '">' + esc(p.nombre) + "</a></h3>" +
      '<p class="precio">' + valorPrecio(p) + "</p>" +
      '<div class="accion" data-accion="' + esc(p.id) + '">' + selector(p) + "</div></article>";
  }
  function refrescarSelectores(id) {
    document.querySelectorAll('[data-accion="' + id + '"]').forEach(function (nodo) {
      nodo.innerHTML = selector(productos[id], nodo.hasAttribute("data-grande"));
    });
  }

  /* Pantallas */
  function inicio() {
    document.title = "Papelito | Papelería creativa, regalos y juegos en Santiago";
    var html = '<h1 class="sr">Papelito: papelería creativa, regalos, recuerdos, juegos y pintura</h1>';
    tienda.categorias.forEach(function (c) {
      var lista = tienda.productos.filter(function (p) { return p.categoria === c.id; });
      if (!lista.length) return;
      html += '<section class="seccion" id="' + esc(c.id) + '" aria-labelledby="t-' + esc(c.id) + '">' +
        '<h2 id="t-' + esc(c.id) + '">' + esc(c.nombre) + '</h2><div class="grilla">' +
        lista.map(celda).join("") + "</div></section>";
    });
    app.innerHTML = html;
  }

  function ficha(id) {
    var p = productos[id];
    if (!p) return noEncontrado();
    var c = categorias[p.categoria];
    document.title = p.nombre + " | Papelito";
    app.innerHTML = '<article class="ficha">' +
      '<a class="volver" href="#/categoria/' + esc(p.categoria) + '">Volver a ' + esc(c ? c.corto : "la tienda") + "</a>" +
      '<div class="ficha__grilla"><div class="ficha__foto"><img src="' + esc(p.imagen) + '" alt="' + esc(p.nombre) + '" width="600" height="600"></div>' +
      "<div><h1>" + esc(p.nombre) + '</h1><p class="precio">' + valorPrecio(p) + "</p>" +
      '<p class="ficha__desc">' + esc(p.descripcion) + "</p>" +
      '<div class="ficha__accion" data-accion="' + esc(p.id) + '" data-grande>' + selector(p, true) + "</div></div></div></article>";
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
      '<form id="form" novalidate>' +
      '<section aria-label="Productos"><div id="lineas">' + ids.map(linea).join("") + "</div>" +
      '<p class="total"><span>Total productos</span><span id="total">' + precio(total()) + "</span></p>" +
      '<p class="nota">El pago es por transferencia.</p>' +
      '<p class="nota" id="notaDespacho"' + (despacho ? "" : " hidden") + ">El costo del despacho se confirma por WhatsApp, antes de pagar.</p></section>" +
      "<section><h2>¿Cómo lo recibes?</h2>" +
      '<fieldset class="opciones"><legend class="sr">Forma de entrega</legend>' +
      '<label class="opcion"><input type="radio" name="entrega" value="retiro"' + (despacho ? "" : " checked") + "> Retiro en Santiago</label>" +
      '<label class="opcion"><input type="radio" name="entrega" value="despacho"' + (despacho ? " checked" : "") + "> Despacho</label></fieldset>" +
      '<p class="nota" id="notaRetiro"' + (despacho ? " hidden" : "") + ">El lugar y el horario del retiro se coordinan por WhatsApp.</p>" +
      campo("nombre", "Tu nombre", "name") +
      '<div id="camposDespacho"' + (despacho ? "" : " hidden") + ">" + campo("direccion", "Dirección", "street-address") + campo("comuna", "Comuna", "address-level2") + "</div>" +
      '</section><div class="enviar">' +
      (hayNumero
        ? '<button class="btn btn--ancho" type="submit">Enviar pedido por WhatsApp</button><p class="nota">Se abrirá WhatsApp con tu pedido escrito.</p>'
        : '<button class="btn btn--ancho" type="button" disabled>Enviar pedido por WhatsApp</button>') +
      '<div id="enviado"></div></div></form></div>';
    if (enviado) mostrarEnviado();
  }

  function campo(id, etiqueta, auto) {
    return '<label class="campo"><span>' + etiqueta + '</span><input id="' + id + '" name="' + id + '" type="text" autocomplete="' + auto + '" maxlength="120" required value="' + esc(datos[id] || "") + '" aria-describedby="error-' + id + '"><small class="error" id="error-' + id + '" hidden></small></label>';
  }

  function linea(id) {
    var p = productos[id];
    var n = pedido[id];
    return '<div class="linea" data-linea="' + esc(id) + '">' +
      '<div class="linea__foto"><img src="' + esc(p.imagen) + '" alt="" width="72" height="72"></div>' +
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
    lineas.push("", "Total productos: " + precio(total()), "", "Nombre: " + (datos.nombre || "").trim());
    if (datos.entrega === "despacho") {
      lineas.push("Entrega: despacho", "Dirección: " + (datos.direccion || "").trim() + ", " + (datos.comuna || "").trim());
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

  function agregar(id) {
    fijar(id, 1);
    actualizarCuenta(true);
    refrescarSelectores(id);
    avisar(productos[id].nombre + " agregado a tu pedido.");
    var mas = document.querySelector('[data-accion="' + id + '"] [data-sumar]');
    if (mas) mas.focus();
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
    if (d.agregar) agregar(d.agregar);
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

  /* El acceso flotante al pedido solo aparece cuando el encabezado ya no se ve */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) {
      document.body.classList.toggle("top-fuera", !e[0].isIntersecting);
    }).observe(document.querySelector(".top"));
  } else {
    document.body.classList.add("top-fuera");
  }

  /* Inicio */
  document.getElementById("cats").innerHTML = tienda.categorias.map(function (c) {
    return '<a href="#/categoria/' + esc(c.id) + '">' + esc(c.corto) + "</a>";
  }).join("");
  document.getElementById("aviso").hidden = !tienda.productos.some(function (p) { return p.muestra; });
  var ig = document.getElementById("irInstagram");
  if (tienda.instagram) ig.href = tienda.instagram; else ig.hidden = true;
  var contacto = [];
  if (tienda.correo) contacto.push('<a href="mailto:' + esc(tienda.correo) + '">' + esc(tienda.correo) + "</a>");
  if (tienda.instagram) contacto.push('<a href="' + esc(tienda.instagram) + '" target="_blank" rel="noopener">@papelito.br</a>');
  document.getElementById("pieContacto").innerHTML = contacto.join(" · ");
  ruta();
})();
