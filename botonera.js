function hacerCirculo() {
    // ref: https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_circle
    const canva_circulo = document.getElementById("canva_circulo");
    const ctx = canva_circulo.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 75, 75, 0, 2 * Math.PI);
    return ctx;
}

function cambiarColor(color="red") {
    const circulo = hacerCirculo();
    circulo.fillStyle = color;
    circulo.fill();
    /*ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke(); //linea*/
}

function agregarEventos() {
    const btnarriba = document.getElementById("btnarriba");
    const btnizquierda = document.getElementById("btnizquierda");
    const btnderecha = document.getElementById("btnderecha");
    const btnabajo = document.getElementById("btnabajo");
    btnarriba.addEventListener("click", function() {
        cambiarColor("#AEDA97");
    });
    btnizquierda.addEventListener("click", function() {
        cambiarColor("#97DAC6");
    });
    btnderecha.addEventListener("click", function() {
        cambiarColor("#97B3DA");
    });
    btnabajo.addEventListener("click", function() {
        cambiarColor("#C197DA");
    });

    document.addEventListener("keydown", function(e) {
        console.log(e);//explorar por favor
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
//funcion principal o main
document.addEventListener("DOMContentLoaded", function() {
    //hacerCirculo();
    agregarEventos();
});