// Seleccionamos todos los botones de compartir
const botonesCompartir = document.querySelectorAll('.btn-share');

botonesCompartir.forEach(boton => {
  boton.addEventListener('click', async () => {
    // Buscamos el enlace 'a' que está dentro del mismo div que el botón
    const contenedor = boton.closest('.link-card');
    const enlace = contenedor.querySelector('a').href;
    const texto = contenedor.querySelector('p').innerText;

    if (navigator.share) {
      try {
        await navigator.share({
          title: texto,
          text: 'Mira este enlace de ' + texto,
          url: enlace
        });
      } catch (err) {
        console.log('Compartir cancelado');
      }
    } else {
      // Opción de respaldo: Copiar al portapapeles
      try {
        await navigator.clipboard.writeText(enlace);
        alert('Enlace de ' + texto + ' copiado al portapapeles');
      } catch (err) {
        console.error('No se pudo copiar', err);
      }
    }
  });
});