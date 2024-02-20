const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//el personaje (Kratos)
const kratos = {
    x: 50,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    color: 'red',
    speed: 5
};

function drawKratos() {
    ctx.fillStyle = kratos.color;
    ctx.fillRect(kratos.x, kratos.y, kratos.width, kratos.height);
}

function updateGameArea() {
    // Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Actualizar posición del personaje
    if (kratos.x > canvas.width - kratos.width || kratos.x < 0) {
        kratos.speed = -kratos.speed; // Invertir dirección al llegar a los bordes
    }
    kratos.x += kratos.speed;

    // Dibujar al personaje
    drawKratos();

    // Llamar a la función en cada fotograma
    requestAnimationFrame(updateGameArea);
}

// Iniciar el juego cuando la ventana se haya cargado completamente
window.onload = function () {
    updateGameArea();
};

function dificultad(){
    location.replace("/html/partida_nueva.html")
}
