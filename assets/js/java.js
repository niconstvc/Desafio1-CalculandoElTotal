document.addEventListener('DOMContentLoaded', function() {
    var spanCantidad = document.getElementById('quantity');
    var spanPrecio = document.getElementById('price');
    var spanTotal = document.getElementById('total');

    var cantidad = 1;
    var precio = parseFloat(spanPrecio.textContent);

    function actualizarTotal() {
        spanCantidad.textContent = cantidad; 
        spanTotal.textContent = (cantidad * precio).toFixed(2);
    }

    document.getElementById('increase').addEventListener('click', function() {
        cantidad++;
        actualizarTotal();
    });

    document.getElementById('decrease').addEventListener('click', function() {
        if (cantidad > 1) {
            cantidad--;
            actualizarTotal();
        }
    });
});
