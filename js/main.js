"use strict"


//event listener 

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);

document.querySelector("#listar").addEventListener("click", listar);
document.querySelector("#btn-sortear").addEventListener("click", sortear);
document.querySelector("#ver").addEventListener("click", Ganadores);

//modelo de datos

let Nombres = [];
let apellidos = [];
let edades = [];
let ganador = "Debes realizar un sorteo primero"

function agregar() {
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let edad = document.querySelector('#edad').value;

    Nombres.push(nombre);
    apellidos.push(apellido);
    edades.push(edad);


    mostrar();

    document.querySelector('#nombre').value = "";
    document.querySelector('#apellido').value = "";
    document.querySelector('#edad').value = "";

}

function mostrar() {
    let lista = document.querySelector("#listado");
    lista.innerHTML = "";

    for (let i = 0; i < Nombres.length; i++) {

        lista.innerHTML += `<li> Se agrego a ${Nombres[i]} ${apellidos[i]} de ${edades[i]} al sorteo! `
    }


}

function reset() {
    Nombres = [];
    apellidos = [];
    edades = [];
    mostrar();
    document.querySelector("#result").innerHTML = ""
}

function borrarUltimo() {
    Nombres.pop();
    apellidos.pop();
    edades.pop();
    mostrar();
}

function sortear() {
    let lista = document.querySelector("#listado");
    lista.innerHTML = "";
    let random = Math.floor(Math.random() * Nombres.length)
    document.querySelector("#result").innerHTML = ` El Ganador es : ${Nombres[random]} ${apellidos[random]} . Felicitaciones!`
    ganador = `${Nombres[random]} ${apellidos[random]} de ${edades[random]}`

    //Guardar ganador en el local Storage
    localStorage.setItem("Ganador", ganador);

}

function listar() {
    reset();
    let ganador = localStorage.getItem("Ganador");
    //    document.querySelector("#result").innerHTML = ` El ultimo ganador fue : ${ganador} . Presione reset para un nuevo sorteo =)`

    Swal.fire(
        `El último ganador fue ${ganador} !`,
        'Presione reset para un nuevo sorteo =)',
        'success'
    )
}


//anadir boton con id ver en index.html principal (ver ganadores)
/*function programarBotonPreview() {
    const btn = document.getElementById("ver");
    btn.addEventListener("click", () => {
        Ganadores();

    })
}*/

function Ganadores() {
    fetch("https://randomuser.me/api/?inc=gender,name,nat")
        .then((response) => response.json())
        .then((json) => mostrarDatos(json));

}

function mostrarDatos(data) {


    let name = (data['results'][0]['name']['first'])
    let last = (data['results'][0]['name']['last'])
    console.log(name);
    console.log(last);

    const div = document.getElementById("result2");
    div.innerHTML = "";

    const divPost = document.createElement("div");
    divPost.innerHTML = `<p>${name} ${last} ha ganado un sorteo cerca de ti</p>
                        `

    div.appendChild(divPost)

}