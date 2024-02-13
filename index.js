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
