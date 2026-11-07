/*
  PAPELITO: AQUÍ SE EDITA LA TIENDA
  Este es el único archivo que hay que tocar para cambiar productos y datos.

  WhatsApp: el número con código de país, sin espacios. Es adonde llegan los pedidos.
            Si queda vacío, la tienda no permite enviar pedidos.
  Correo:   aparece en el pie de la página.

  Para agregar un producto, copia un bloque { ... } y cambia sus datos:
    id          sin espacios ni acentos y sin repetirse (ej: "cuaderno-flores")
    categoria   el id de una de las categorías de abajo
    nombre      lo que verá el cliente
    precio      en pesos, sin puntos (ej: 3500)
    descripcion una o dos frases
    imagen      la foto, guardada en la carpeta img (ej: "img/cuaderno.jpg")
    agotado     true si no hay stock (opcional)
    muestra     true marca el producto como ejemplo. Bórralo en los productos reales.
*/
window.PAPELITO = {
  whatsapp: "+56972846371",
  correo: "papelitobra@gmail.com",
  instagram: "https://www.instagram.com/papelito.br/",

  categorias: [
    { id: "papeleria", nombre: "Papelería creativa", corto: "Papelería", color: "coral" },
    { id: "regalos", nombre: "Regalos", corto: "Regalos", color: "mantequilla" },
    { id: "recuerdos", nombre: "Recuerdos para celebraciones", corto: "Recuerdos", color: "malva" },
    { id: "juegos", nombre: "Juegos didácticos", corto: "Juegos", color: "agua" },
    { id: "pintura", nombre: "Artículos de pintura", corto: "Pintura", color: "flor" }
  ],

  productos: [
    { id: "cuaderno-tapa-dura", categoria: "papeleria", nombre: "Cuaderno de tapa dura", precio: 5990, imagen: "img/cuaderno.svg", muestra: true,
      descripcion: "Cuaderno tamaño A5 con hojas lisas, para escribir o dibujar." },
    { id: "cintas-washi", categoria: "papeleria", nombre: "Set de cintas washi", precio: 3990, imagen: "img/washi.svg", muestra: true,
      descripcion: "Tres cintas decorativas para agendas, tarjetas y regalos." },
    { id: "lamina-stickers", categoria: "papeleria", nombre: "Lámina de stickers", precio: 1990, imagen: "img/stickers.svg", muestra: true,
      descripcion: "Una lámina de stickers con flores y figuras." },

    { id: "caja-regalo", categoria: "regalos", nombre: "Caja de regalo", precio: 8990, imagen: "img/caja.svg", muestra: true,
      descripcion: "Caja con cinta, lista para regalar." },
    { id: "bolsa-regalo", categoria: "regalos", nombre: "Bolsa de regalo", precio: 2490, imagen: "img/bolsa.svg", muestra: true,
      descripcion: "Bolsa de papel con asas y un corazón al frente." },
    { id: "set-libreta", categoria: "regalos", nombre: "Libreta con lápiz", precio: 4490, imagen: "img/libreta.svg", muestra: true,
      descripcion: "Una libreta de bolsillo con su lápiz a juego." },

    { id: "bolsitas-cumple", categoria: "recuerdos", nombre: "Bolsitas de cumpleaños", precio: 6990, imagen: "img/bolsitas.svg", muestra: true,
      descripcion: "Pack de 10 bolsitas para los recuerdos de la fiesta." },
    { id: "toppers-torta", categoria: "recuerdos", nombre: "Toppers para torta", precio: 3490, imagen: "img/toppers.svg", muestra: true,
      descripcion: "Set de adornos de papel para decorar una torta." },
    { id: "etiquetas", categoria: "recuerdos", nombre: "Etiquetas de agradecimiento", precio: 2990, imagen: "img/etiquetas.svg", muestra: true,
      descripcion: "Pack de 20 etiquetas para atar a cada recuerdo." },

    { id: "memorice", categoria: "juegos", nombre: "Memorice de animales", precio: 7490, imagen: "img/memorice.svg", muestra: true,
      descripcion: "Parejas de tarjetas para jugar a encontrar y recordar." },
    { id: "puzzle", categoria: "juegos", nombre: "Puzzle de madera", precio: 9990, imagen: "img/puzzle.svg", muestra: true,
      descripcion: "Piezas grandes, fáciles de tomar con las manos." },
    { id: "abaco", categoria: "juegos", nombre: "Ábaco de colores", precio: 11990, imagen: "img/abaco.svg", muestra: true,
      descripcion: "Para aprender a contar moviendo las cuentas." },

    { id: "temperas", categoria: "pintura", nombre: "Témperas, 6 colores", precio: 4990, imagen: "img/temperas.svg", muestra: true,
      descripcion: "Seis potes de témpera para pintar sobre papel o cartón." },
    { id: "acuarelas", categoria: "pintura", nombre: "Caja de acuarelas", precio: 6490, imagen: "img/acuarelas.svg", muestra: true,
      descripcion: "Seis colores en pastilla, en una caja que se lleva a todas partes." },
    { id: "pinceles", categoria: "pintura", nombre: "Set de pinceles", precio: 3990, imagen: "img/pinceles.svg", muestra: true,
      descripcion: "Tres pinceles de distintos grosores." }
  ]
};
