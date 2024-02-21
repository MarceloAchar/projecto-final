document.addEventListener("DOMContentLoaded", function(){
    reproducirAudio();
});

function reproducirAudio(){
    const audio = document.getElementById("miAudio")
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}
function primer_juego(){
    location.replace("/html/desplazamiento.html")
}

function segundo_juego(){
    location.replace("/html/memorama.html")
}

function tercer_juego(){
    location.replace("/html/mini_juego.html")
}

function cuarto_juego(){
    location.replace("/html/botonera.html")
}

function volver_inicio(){
    location.replace("/index.html")
}