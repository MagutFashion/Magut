let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}

function enviarAWhatsApp() {
    let mensaje = 'Hola, quiero realizar el siguiente pedido:\n';
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} por $${item.precio}\n`;
    });
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    mensaje += `Total: $${total}\nGracias.`;

    const numeroTelefono = '521234567890'; // Reemplaza con el número de WhatsApp de la empresa
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
