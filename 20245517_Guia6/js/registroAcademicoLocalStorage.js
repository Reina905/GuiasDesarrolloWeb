//Leer elementos del DOM

const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

const inputCarnet = document.querySelector("#inputCarnet");
const inputNombre = document.querySelector("#inputNombre");
const inputApellidos = document.querySelector("#inputApellidos");
btnAddEstudiante.addEventListener("click", guardarEstudiantes);

//guardarEstudiantes en el arreglo
function guardarEstudiante() {
    const nombre = inputNombre.value.trim();
    const apellidos = inputApellidos.value.trim();
    const carnet = inputCarnet.value.trim();
    const errores = validarDatos(carnet, nombre, apellidos);

    if (errores.length > 0){
        //Join es para hacer un arreglo a texto
        alert("Errores: \n " + errores.join("\n "));
        return;
    }

    const alumnos = [];
    alumnos.push({carnet, nombre, apellidos});
    guardarEstudiantes(alumnos);
    //recuperarEstudiantes
}

//Guardar los estudiantes en el local storage
function guardarEstudiantes(estudiantes){
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))
}

function recuperarEstudiantes(){
    const data = localStorage.getItem("estudiantes");
    return data ? JSON.parse(data): [];
}

function validarDatos(carnet, nombre, apellidos){
    const errores = [];

    if (carnet.trim().length==0){
        errores.push("El carnet es requerido")
    }

    if (nombre.trim().length==0){
        errores.push("El nombre es requerido")
    }

    if (apellidos.trim().length==0){
        errores.push("Los apellidos son requerido")
    }

    return errores;
}

