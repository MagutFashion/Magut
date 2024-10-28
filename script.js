const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        const item = document.createElement('li');
        item.textContent = producto;
        listaCarrito.appendChild(item);
    });
}

function enviarPedidoWhatsApp() {
    const numeroWhatsApp = '1234567890'; // Reemplaza con el número de WhatsApp de tu cliente
    const mensaje = encodeURIComponent('Hola, me gustaría comprar los siguientes productos: ' + carrito.join(', '));
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}
