document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navHamburguer = document.querySelector('.nav-hamburguer');

    hamburgerMenu.addEventListener('click', function() {
        console.log('Click en el menú hamburguesa');
        navHamburguer.classList.toggle('active');
        console.log('Clase active toggled');
    });

    // Para hacer visible el elemento al cargar la página
    navHamburguer.style.display = 'block'; // o 'flex', o cualquier otro valor que sea apropiado para tu diseño
});


// api clima

document.addEventListener('DOMContentLoaded', function() {
  const apiKey = '8e410967542fb95c076a2651cd434e0f';
  const ciudad = 'Buenos Aires';

  const climaInfoElement = document.getElementById('clima-info');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          if (data.main) {
              const cityName = data.name;
              const temperature = (data.main.temp - 273.15).toFixed(1); // Convertimos de Kelvin a Celsius y redondeamos a 1 decimal buscado en google jaja

              climaInfoElement.innerHTML = `La temperatura en ${cityName} es ${temperature}°C`;
          } else {
              climaInfoElement.innerHTML = 'No se pudo obtener la información del clima.';
          }
      })
      .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

     
     const username = this.querySelector('input[name="usuario"]').value;


    // Mostramos animación de carga
    document.getElementById('loading').style.display = 'block';

    // Simulamos una petición asíncrona
    setTimeout(function() {
        // Ocultar animación de carga
        document.getElementById('loading').style.display = 'none';

    // Mostrar modal de conexión exitosa
    document.getElementById('myModal').style.display = 'block';

    // Mostrar mensaje de bienvenida personalizado
    document.getElementById('welcomeMessage').textContent = `¡Bienvenido, ${username}!`;
    }, 5000); // Simulamos una solicitud que dura 5 segundos

    
    this.reset();
});



// Cerrar el modal al hacer clic en la "X"
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

