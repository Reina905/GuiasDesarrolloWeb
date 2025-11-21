const formulario = document.getElementById("formAlumno")
const inputCarnet = document.getElementById("carnet");
const inputNombre = document.getElementById("nombre");
const inputDUI = document.getElementById("DUI");
const inputNIT = document.getElementById("NIT");
const inputFechaNacimiento = document.getElementById("FechaNacimiento");
const inputCorreo = document.getElementById("correo");
const inputEdad = document.getElementById("edad");
const btnAgregar = document.getElementById("idAddEstudiante");

formulario.addEventListener("submit", validarCampos);

//Expresiones regulares
const regexCarnet = /^[A-Za-z]{2}[0-9]{3}$/;

const regexNombre = /^[A-Z][a-zÁÉÍÓÚÜÑáéíóúüñ]+( [A-Z][a-zÁÉÍÓÚÜÑáéíóúüñ]+)+$/;

const regexDUI = /^[0-9]{8}-[0-9]$/;

const regexNIT = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]$/;

const regexFechaNacimiento = /^\d{4}-\d{2}-\d{2}$/;

// Correo electrónico básico
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

const regexEdad = /^[0-9]{1,3}$/;

function validarCampos(e) {
    e.preventDefault();
    let errores = [];

    // Limpiar borde de todos los campos antes de validar
    [inputCarnet, inputNombre, inputDUI, inputNIT, inputFechaNacimiento, inputCorreo, inputEdad]
        .forEach(i => limpiarError(i));

    if (inputCarnet.value.trim() === "") {
        marcarError(inputCarnet);
        errores.push("El campo Carnet no puede estar vacío.");
    } else if (!regexCarnet.test(inputCarnet.value)) {
        marcarError(inputCarnet);
        errores.push("Carnet inválido. Formato: dos letras y tres números. Ej: AB001");
    }

    if (inputNombre.value.trim() === "") {
        marcarError(inputNombre);
        errores.push("El campo Nombre no puede estar vacío.");
    } else if (!regexNombre.test(inputNombre.value)) {
        marcarError(inputNombre);
        errores.push("Nombre inválido. Solo letras (con la primera letra de cada palabra en mayúscula) y espacios.");
    }

    if (inputDUI.value.trim() === "") {
        marcarError(inputDUI);
        errores.push("El campo DUI no puede estar vacío");
    } else if (!regexDUI.test(inputDUI.value)) {
        marcarError(inputDUI);
        errores.push("DUI inválido. Formato ########-#");
    }

    if (inputNIT.value.trim() === "") {
        marcarError(inputNIT);
        errores.push("El campo NIT no puede estar vacío");
    } else if (!regexNIT.test(inputNIT.value)) {
        marcarError(inputNIT);
        errores.push("NIT inválido. Formato ####-######-###-#");
    }

    if (inputFechaNacimiento.value.trim() === "") {
        marcarError(inputFechaNacimiento);
        errores.push("Debe ingresar la fecha de nacimiento");
    } else if (!regexFechaNacimiento.test(inputFechaNacimiento.value)) {
        marcarError(inputFechaNacimiento);
        errores.push("Formato de fecha inválido.");
    }

    if (inputCorreo.value.trim() === "") {
        marcarError(inputCorreo);
        errores.push("El campo Correo no puede estar vacío.");
    } else if (!regexCorreo.test(inputCorreo.value)) {
        marcarError(inputCorreo);
        errores.push("Correo electrónico inválido.");
    }

    if (inputEdad.value.trim() === "") {
        marcarError(inputEdad);
        errores.push("El campo Edad no puede estar vacío.");
    } else if (!regexEdad.test(inputEdad.value)) {
        marcarError(inputEdad);
        errores.push("Edad inválida. Solo números de máximo 3 digitos");
    }

    if (errores.length > 0) {
        alert("Corrige los siguientes errores (no agreges espacios al inicio y al final):\n\n" + errores.join("\n"));
        return;
    }

    alert("Formulario enviado correctamente");
    imprimirResultados();
    limipiarFormulario();
}

function marcarError(input) {
    input.style.borderColor = "red";
}

function limpiarError(input) {
    input.style.borderColor = "";
}


function imprimirResultados() {
    const contenedor = document.querySelector(".resultados");

    contenedor.innerHTML = `
        <h2>Datos del estudiante</h2>
        <p><strong>Carnet:</strong> ${inputCarnet.value}</p>
        <p><strong>Nombre:</strong> ${inputNombre.value}</p>
        <p><strong>DUI:</strong> ${inputDUI.value}</p>
        <p><strong>NIT:</strong> ${inputNIT.value}</p>
        <p><strong>Fecha de nacimiento:</strong> ${inputFechaNacimiento.value}</p>
        <p><strong>Correo:</strong> ${inputCorreo.value}</p>
        <p><strong>Edad:</strong> ${inputEdad.value}</p>
    `;
}

function limipiarFormulario(){
    inputCarnet.value = "";
    inputNombre.value = "";
    inputDUI.value = "";
    inputNIT.value = "";
    inputFechaNacimiento.value = "";
    inputCorreo.value = "";
    inputEdad.value = "";
}
