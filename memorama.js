let iconos;
let selectors = [];

generarTablero();

function cargarIconos() {
  iconos = [
    `<img src="/memorama/card1.jpg">`,
    `<img src="/memorama/card2.jpg">`,
    `<img src="/memorama/card3.jpg">`,
    `<img src="/memorama/card4.jpg">`,
    `<img src="/memorama/card5.jpg">`,
    `<img src="/memorama/card6.jpg">`,
    `<img src="/memorama/card7.jpg">`,
    `<img src="/memorama/card8.jpg">`,
    `<img src="/memorama/card9.jpg">`,
    `<img src="/memorama/card10.jpg">`,
    `<img src="/memorama/card11.jpg">`,
    `<img src="/memorama/card12.jpg">`,
  ];
}

function generarTablero() {
  cargarIconos();

  let tablero = document.getElementById("tablero");

  let tarjetas = [];
  let len = iconos.length * 2;
  for (let i = 0; i < len; i++) {
    tarjetas.push(`
        <div class="card-area" onclick="cardSelector(${i})">
            <div class="card" id="card${i}">
                <div class="face front" id="back${i}">
                ${iconos[0]}
                </div>
                <div class="face back"><img src="/memorama/reverse.jpg"></div>
            </div>
        </div>
      `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join("");
}

function cardSelector(i) {
  let card = document.getElementById("card" + i);
  if (card.style.transform != "rotateY(180deg)") {
    card.style.transform = "rotateY(180deg)";
    selectors.push(i);
  }
  if (selectors.length == 2) {
    desSelectors(selectors);
    selectors = [];
  }
}

function desSelectors(selectors) {
  setTimeout(() => {
    let back1 = document.getElementById("back" + selectors[0]);
    let back2 = document.getElementById("back" + selectors[1]);

    if (back1.innerHTML != back2.innerHTML) {
      let c1 = document.getElementById("card" + selectors[0]);
      let c2 = document.getElementById("card" + selectors[1]);
      c1.style.transform = "rotateY(0deg)";
      c2.style.transform = "rotateY(0deg)";
    } else {
      back1.style.opacity = 0.1;
      back2.style.opacity = 0.1;
    }
  }, 1000);
}

function dificultad(){
  location.replace("/html/partida_nueva.html")
}
