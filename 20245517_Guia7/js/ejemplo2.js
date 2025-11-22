// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// Recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        // Contabilizando el total de INPUT TYPE = TEXT
        if ((tipoElemento == "text" && tipoNode == "INPUT")) {
            console.log(elemento);
            totText++;
        }
        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // Contabilizando el total de INPUT TYPE = DATE
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // Contabilizando el total de SELECT
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    // Funcion que permite mostrar el modal de Bootstrap
    // Esta funcion es definida por Bootstrap
    modal.show();
};

const validarEmail = function(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validarFecha = function(fecha) {
    const fechaIngresada = new Date(fecha);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    return fechaIngresada <= fechaActual;
};

const validarFormulario = function() {
    let errores = [];
    
    const nombre = document.getElementById("idNombre");
    const apellidos = document.getElementById("idApellidos");
    const fechaNac = document.getElementById("idFechaNac");
    const correo = document.getElementById("idCorreo");
    const password = document.getElementById("idPassword");
    const repetirPassword = document.getElementById("idPasswordRepetir");
    const pais = document.getElementById("idCmPais");
    
    // Validar campos de texto
    if (nombre.value.trim() === "") errores.push("El campo Nombres no puede estar vacio");
    if (apellidos.value.trim() === "") errores.push("El campo apellidos no puede estar vacio");
    
    // Validar fecha
    if (fechaNac.value === "") {
        errores.push("Debe ingresar una fecha de nacimiento");
    } else if (!validarFecha(fechaNac.value)) {
        errores.push("La fecha de nacimiento no puede ser mayor que la fecha de hoy");
    }
    
    // Validar email
    if (correo.value.trim() === "") {
        errores.push("El campo de correo electrónico no puede estar vacio");
    } else if (!validarEmail(correo.value)) {
        errores.push("El formato del correo electrónico no es valido");
    }
    
    // Validar contraseñas
    if (password.value === "") errores.push("El campo de contraseña no puede estar vacio");
    if (repetirPassword.value === "") errores.push("El campo repetir contraseña no puede estar solo");
    
    if (password.value !== "" && repetirPassword.value !== "" && password.value !== repetirPassword.value) {
        errores.push("Las contraseñas no coinciden");
    }
    
    // Validar pais
    if (pais.value === "Seleccione una opcion" || pais.value === "") {
        errores.push("Debe seleccionar un país de origen");
    }
    
    // Validar carrera
    if (!formulario.querySelector('input[name="idRdCarrera"]:checked')) {
        errores.push("Debe seleccionar una carrera");
    }
    
    // Validar intereses 
    if (formulario.querySelectorAll('input[type="checkbox"]:checked').length === 0) {
        errores.push("Debe seleccionar al menos un interés");
    }
    
    return errores;
};

// Mostrar datos en el modal
const mostrarDatosEnModal = function() {
    let elementos = formulario.elements;
    
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "table table-striped table-bordered");
    
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.textContent = "Campo";
    th2.textContent = "Valor";
    trHead.appendChild(th1);
    trHead.appendChild(th2);
    thead.appendChild(trHead);
    tabla.appendChild(thead);
    

    let tbody = document.createElement("tbody");
    
    // Función auxiliar para crear fila
    const crearFila = (campo, valor) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.textContent = campo;
        td2.textContent = valor;
        tr.appendChild(td1);
        tr.appendChild(td2);
        return tr;
    };
    
    for (let elemento of elementos) {
        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;
        let fila = null;

        if ((tipoElemento == "text" || tipoElemento == "email" || tipoElemento == "date") && tipoNode == "INPUT") {
            fila = crearFila(elemento.id, elemento.value);
        }

        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            fila = crearFila(elemento.id, elemento.value);
        }

        else if (tipoElemento == "radio" && tipoNode == "INPUT" && elemento.checked) {
            let label = document.querySelector(`label[for="${elemento.id}"]`);
            fila = crearFila("Carrera", label ? label.textContent : elemento.value);
        }

        else if (tipoElemento == "checkbox" && tipoNode == "INPUT" && elemento.checked) {
            let label = document.querySelector(`label[for="${elemento.id}"]`);
            fila = crearFila("Interés", label ? label.textContent : "Seleccionado");
        }

        else if (tipoNode == "SELECT") {
            fila = crearFila(elemento.id, elemento.options[elemento.selectedIndex].text);
        }
        
        if (fila) {
            tbody.appendChild(fila);
        }
    }
    
    tabla.appendChild(tbody);
    bodyModal.appendChild(tabla);
    modal.show();
};

// VALIDACIÓN COMPLETA CON TABLA
button.onclick = (e) => {
    e.preventDefault();
    
    let errores = validarFormulario();
    
    if (errores.length > 0) {
        let mensajeError = "Por favor corrija los siguientes errores:\n\n";
        errores.forEach(error => {
            mensajeError += "• " + error + "\n";
        });
        alert(mensajeError);
    } else {
        mostrarDatosEnModal();
    }
};