document.addEventListener("DOMContentLoaded", function () {
    reproducirAudio();
    history.forward();
});

function reproducirAudio() {
    const audio = document.getElementById("miAudio")
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}

function formulario() {
    location.replace("/html/formulario.html")
}

function opciones() {
    location.replace("/html/opciones.html")
}

function tesoros() {
    location.replace("/html/tesoros.html")
}

function menu() {
    location.replace("/index.html")
}
