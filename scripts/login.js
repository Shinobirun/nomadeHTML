document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        var ventanaEmergente = document.createElement('div');
        ventanaEmergente.className = 'ventana-emergente';
        ventanaEmergente.innerText = 'Usuario logueándose';
        document.body.appendChild(ventanaEmergente);

        setTimeout(function() {
            ventanaEmergente.remove();
        }, 5000);
    });

    var closeButton = document.getElementById('closeButton');

    closeButton.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});


