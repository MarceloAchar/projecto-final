let posicion = 1;

function agregarEventos() {
    const btnarriba = document.getElementById("btnarriba");
    const btnizquierda = document.getElementById("btnizquierda");
    const btnderecha = document.getElementById("btnderecha");
    const btnabajo = document.getElementById("btnabajo");

    document.addEventListener("keydown", function(e) {
        console.log(e);
        if(e.key === "ArrowUp") {
            btnarriba.click();
        }
        if(e.key === "ArrowRight") {
            btnderecha.click();
        }
        if(e.key === "ArrowDown") {
            btnabajo.click();
        }
        if(e.key === "ArrowLeft") {
            btnizquierda.click();
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    agregarEventos();
});

function derecha() {
    document.getElementById("a" + posicion).src = "/imagen/blanco.jpg"
    posicion += 1;
    if (posicion > 25) {
        posicion = 25;
    }
    document.getElementById("a" + posicion).src = "/imagen/dibujo.jpg"
}

function izquierda() {
    document.getElementById("a" + posicion).src = "/imagen/blanco.jpg"
    posicion -= 1;
    if (posicion < 1) {
        posicion = 1;
    }
    document.getElementById("a" + posicion).src = "/imagen/dibujo.jpg"
}

function abajo() {
    document.getElementById("a" + posicion).src = "/imagen/blanco.jpg"
    posicion += 5;
    if (posicion > 25) {
        posicion -= 5;
    }
    document.getElementById("a" + posicion).src = "/imagen/dibujo.jpg"
}

function arriba() {
    document.getElementById("a" + posicion).src = "/imagen/blanco.jpg"
    if (posicion < 6) {
        //esta en la primera fila, no procedera a ir hacia arriba
    } else {
        posicion -= 5;
    }

    if (posicion > 25) {
        posicion += 5;
    }

    document.getElementById("a" + posicion).src = "/imagen/dibujo.jpg"
}

function dificultad(){
    location.replace("/html/partida_nueva.html")
}