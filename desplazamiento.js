let posicion = 1;

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
