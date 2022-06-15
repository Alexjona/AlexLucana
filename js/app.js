class Participante {
    constructor(id, nombre, apellido, edad, ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

const empleado1 = new Participante("1", "Analia", "Morales", 24, "Villa Lynch");
const empleado2 = new Participante("2", "Noelia Melina", "Lopez", 20, "Villa del Parque");
const empleado3 = new Participante("3", "Florencia", "Gomez", 21, "Villa Devoto");

let participantes = [empleado1, empleado2, empleado3] // ex empleados

// Botones
const boton1 = document.getElementById("agregar");
boton1.addEventListener("click", () => {
    agregarParticipante();
})
const boton2 = document.getElementById("eliminar");
boton2.addEventListener("click", () => {
    eliminarParticipante()
})
const boton3 = document.getElementById("listar");
boton3.addEventListener("click", () => {
    listarParticipantes();
})


function agregarParticipante() {
    let id = 1;
    if (participantes.length > 0) {
        id = participantes[participantes.length - 1].id++;
    }

    let nombre = prompt("Ingrese un nombre");
    let apellido = prompt("Ingrese un apellido");
    let años = Number(prompt("Ingrese una edad"));
    let ciudad = prompt("Ingrese un ciudad");
    let participante = new Participante(id, nombre, apellido, años, ciudad);

    participantes.push(participante);
    listarParticipantes()
}

function listarParticipantes() {
    let miLista = document.querySelector("#listaPartic");
    if (!miLista) {
        miLista = document.createElement("ul");
        miLista.setAttribute("id", "listaPartic");
        miLista.style.textAlign = 'center'
        miLista.style.listStyle = 'none'
        miLista.style.margin = '2em'
    }
    miLista.innerHTML = "";


    participantes.forEach((participantes) => {
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${participantes.id} ${participantes.nombre} ${participantes.apellido} ${participantes.edad} ${participantes.ciudad}`;
        miLista.appendChild(nodoli);
    });

    document.body.appendChild(miLista);
}

function eliminarParticipante() {

    let id = Number(prompt("Ingrese ID del participante a eliminar"));
    let encontrado = participantes.find((participante) => participante.id === id);

    if (!encontrado) {
        alert("Participante no encontrado");
    } else {
        let index = participantes.indexOf(encontrado);
        participantes.splice(index, 1);
    }
    listarParticipantes()
}