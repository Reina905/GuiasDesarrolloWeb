// ACCEDIENDO A LA REFERENCIA DEL FORMULARIO QUE
// TENDRA LOS NUEVOS ELEMENTOS
const newForm = document.getElementById("idNewForm");

// ACCEDIENDO A LA REFERENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

// Crear botón para validar nuevos controles
const buttonValidar = document.createElement("button");
buttonValidar.type = "button"; 
buttonValidar.id = "idBtnValidar";
buttonValidar.className = "btn btn-success mt-3";
buttonValidar.textContent = "Validar nuevos controles";
newForm.appendChild(buttonValidar);

// ACCEDIENDO AL VALOR DEL SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento");

// ACCEDIENDO A LOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

//Agregando funciones
const vericarTipoElemento = function(){
    let elemento = cmbElemento.value;
    //Validando que se haya seleccionado un elemento
    if(elemento !=""){
        //Metodo perteniciente al modal de boostrap
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

const newSelect = function () {
    // Creando elementos
    let addElemento = document.createElement("select");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`.trim());
    addElemento.setAttribute("class", "form-select");

    //Creando option para el select
    for (let i = 1; i < 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`.trim());
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`.trim();

    //Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");

    // Agregando atributos
    divElemento.setAttribute("class", "form-floating");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    //Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    //Creando elementos
    let addElemento = document.createElement("input");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`.trim());
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`.trim());
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`.trim();

    // Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    // Agregando atributos
    divElemento.setAttribute("class", "form-check");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    //Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    // Creando elementos de tipo = text, number, date y password
    let addElemento = 
        newElemento == "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");

    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`.trim());
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`.trim());

    // creando icono para el label
    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    //Creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando el elemento i como hijo del label, afterbegin le
    //indicamos que se creara antes de su primer hijo
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`.trim();

    // Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");

    // Agregando atributos
    divElemento.setAttribute("class", "form-floating mb-3");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    //Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

// AGREGANDO EVENTO CLIC A LOS BOTONES
buttonCrear.onclick = () => {
    vericarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;
        const idNuevo = `id${nombreElemento.value}`.trim();

        if (document.getElementById(idNuevo)){
            alert(`No se puede crear el control. Ya existe un control con el ID: ${idNuevo}`);
        } else if (elemento == "select") {
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else{
        alert("Hay campos vacios");
    }
};

// VALIDAR EL FORMULARIO
const validarFormulario = function() {
    const inputs = newForm.querySelectorAll('input[type="text"], input[type="number"], input[type="date"], input[type="password"], input[type="email"], textarea');
    const selects = newForm.querySelectorAll('select');
    const radios = newForm.querySelectorAll('input[type="radio"]');
    const checkboxes = newForm.querySelectorAll('input[type="checkbox"]');
    
    let esValido = true;
    let mensajeError = "Errores encontrados:\n\n";
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            esValido = false;
            mensajeError += `- El campo "${input.placeholder}" está vacío o no tiene el tipo de dato ingresado es incorrecto \n`;
        }
    });
    
    selects.forEach(select => {
        if (!select.value) {
            esValido = false;
            mensajeError += `No se ha seleccionado una opción en el select`;
        }
    });
    
    if (radios.length > 0) {
        const radioSeleccionado = Array.from(radios).some(radio => radio.checked);
        if (!radioSeleccionado) {
            esValido = false;
            mensajeError += `No se ha seleccionado ninguna opción de radio\n`;
        }
    }
    
    if (checkboxes.length > 0) {
        const checkboxSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!checkboxSeleccionado) {
            esValido = false;
            mensajeError += `- No se ha seleccionado ningun checkbox\n`;
        }
    }
    if (esValido) {
        alert("Todos los campos estan completos");
    } else {
        alert(mensajeError);
    }
};

buttonValidar.onclick = () => {
    validarFormulario();
};

//Agregando evento para el modal de bootsrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    //Limpiando campos para los nuevos elementos
    tituloElemento.value = "";
    nombreElemento.value = "";
    //Inicializando puntero en el campo del titulo para el control
    tituloElemento.focus();
});

//le puse .trim() a los ids de los controles, ya que poner espacios al inicio o al final no deberia de ser relevante para ver si dos ids son iguales