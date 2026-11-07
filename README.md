# Papelito

Tienda en línea de Papelito: papelería creativa, regalos, recuerdos para celebraciones, juegos didácticos y artículos de pintura. Santiago de Chile.

El sitio es estático y se publica con GitHub Pages desde la carpeta `docs/`. Los pedidos se cierran por WhatsApp y se pagan por transferencia.

## Cómo editar los productos

Todo se edita en un solo archivo: [`docs/productos.js`](docs/productos.js). Las instrucciones están al inicio del archivo.

1. Guarda la foto del producto en `docs/img/`.
2. Copia un bloque de producto en `docs/productos.js` y cambia sus datos.
3. En los productos reales, borra `muestra: true`. Cuando ya no quede ninguno con esa marca, el aviso de catálogo de muestra desaparece solo.

Puedes hacerlo desde github.com: abre el archivo, presiona el lápiz y guarda los cambios. El sitio se actualiza en un par de minutos.

## Verlo en tu computador

```
cd docs
python -m http.server 8137
```

Luego abre http://127.0.0.1:8137
