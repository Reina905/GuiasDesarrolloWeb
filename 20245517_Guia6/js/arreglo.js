//Accedemos al contenedor donde se mostrara los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

//Accedemos a cada boton por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

//Agregamos el evento click a los botones, adicionalmente se le asigna
//la funcion que realizará la operación

btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento(){
    
}