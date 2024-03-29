document.addEventListener("DOMContentLoaded", function () {
    reproducirAudio();
    const btnCrear = document.getElementById("btnCrear");
    btnCrear.addEventListener("click", function () {
        capturarDatosDelFormulario();
    });
});

function reproducirAudio(){
    const audio = document.getElementById("miAudio");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}

function menu() {
    location.replace("/index.html");
}

function partida_nueva (){
    location.replace("/html/partida_nueva.html");
}

function capturarDatosDelFormulario() {

    const txtnombres = document.getElementById("txtNombres");
    const txtapellidos = document.getElementById("txtApellidos");

    //Array de objetos del radiobutton
    //Presta atención, usamos el getElementsByName
    const arrayRadioSexo = document.getElementsByName("sexo");
    //esto recupera el valor de nombre
    const nombres = txtnombres.value.trim();
    //valido el nombre
    if (!nombres) {
        alert("Falta el nombre");
        return;
    }
    //esto recupera el valor de apellidos
    const apellidos = txtapellidos.value.trim();
    if (!apellidos) {
        alert("Falta apellidos");
        return;
    }

    let femenino = null;
    let masculino = null;
    // recorrer el array de sexo
    let estaMarcadoElSexo = false;
    for (let item of arrayRadioSexo) {
        //Revisar si la propiedad checked es true
        //Revisar si el value del item para saber si es M o F
        if (item.checked && item.value === "M") {
            estaMarcadoElSexo = true;
            masculino = item.value;
            console.log(item.checked);
        }
        if (item.checked && item.value === "F") {
            estaMarcadoElSexo = true;
            femenino = item.value;
            console.log(item.checked);
        }
    }
    //Si no se marcó ningun radiobutton se avisa al usuario
    if (!estaMarcadoElSexo) {
        alert("Debe seleccionar el sexo!");
        return;
    }

    // si llegamos hasta aqui, quiere decir que esta bien validado 
    const usuario = {
        nombres: nombres
        , apellidos: apellidos
        , sexo: masculino ? masculino : femenino
    };
    console.log(usuario);

    //Proceso de guardado

    const crearJsonUsuario = JSON.stringify(usuario);
    localStorage.setItem("usuario", crearJsonUsuario);
    console.log(crearJsonUsuario);
    //alert("El registro de usuario se completo correctamente")
    partida_nueva();
}