const botonesCompartir = document.querySelectorAll('.btn-share');

botonesCompartir.forEach(boton => {
  boton.addEventListener('click', async () => {
    const contenedor = boton.closest('.link-card');
    const enlace = contenedor.querySelector('a').href;
    const titulo = contenedor.querySelector('.card-title').innerText;

    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: 'Mirá este enlace de ReservAR: ' + titulo,
          url: enlace
        });
      } catch (err) {
        console.log('Compartir cancelado');
      }
    } else {
      try {
        await navigator.clipboard.writeText(enlace);
        alert('Enlace de ' + titulo + ' copiado al portapapeles');
      } catch (err) {
        console.error('No se pudo copiar', err);
      }
    }
  });
});
