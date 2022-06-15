"use strict"


//event listener 

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);

document.querySelector("#listar").addEventListener("click", listar);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

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
        'algo',
        'Presione reset para un nuevo sorteo =)',
        'success'
    )
}