

window.onload = () => {
    const imagenes = ["https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png"];
    const display = document.getElementById("display");
    const botonSiguiente = document.getElementsByName("siguiente")[0];
    const botonAnterior = document.getElementsByName("anterior")[0];
    const botonPantallaCompleta = document.getElementsByName("pantallaCompleta")[0];
    const botonMostrarMensaje = document.getElementById("mostrarMensaje");
    const campoMensaje = document.getElementById("mensaje");

    let imagenActual = 0;
    const imagenSiguiente = () => {
        if (imagenActual < imagenes.length - 1) {
            imagenActual++;
        } else {
            imagenActual = 0;
        }

        display.src = imagenes[imagenActual];
    }
    const imagenAnterior = () => {
        if (imagenActual > 0) {
            imagenActual--;
        } else {
            imagenActual = imagenes.length - 1;
        }
        imagenActual--;
        display.src = imagenes[imagenActual];
    }
    const pantallaCompleta = () => {
        display.requestFullscreen();
    }
    const mostrarMensaje = () => {
        Swal.fire(
            '',
            campoMensaje.value,
            'success'
        )
    }
    botonSiguiente.onclick = imagenSiguiente;
    botonAnterior.onclick = imagenAnterior;
    botonPantallaCompleta.onclick = pantallaCompleta;
    botonMostrarMensaje.onclick = mostrarMensaje;
}