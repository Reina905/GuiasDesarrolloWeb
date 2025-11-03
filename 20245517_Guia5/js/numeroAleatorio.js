//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random()*25) + 1;

//Creamos una constante que permita identificar el maximo de intentos
const numeroIntentos = 3;

//Guardará el número de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio(){
    //Definimos una variable para impresion de mensajes
    let mensaje;

    //Utilizamos el DOM para acceder al parrafo creado
    const parrafo = document.querySelector("#idParrafo");

    //Verificamos en que intento esta el usuario
    if (intentos <= numeroIntentos){
        let numero = prompt(
            "¿Que número se ha generado (Intento " + intentos + ")?"
        );

        //Verificamos el numero aleatorio con el ingresado por el usuario
        if (numero == numeroAleatorio){
            mensaje = `¡Es sorprendente, pudiste adivinar el numero oculto (${numeroAleatorio}).
            Refresque la pagina para volver a jugar`;
        } else if (intentos==numeroIntentos){
            mensaje = `El numero de intentos ha terminado.
            EL numero oculto era: ${numeroAleatorio}. Refresque la pagina para volver a jugar`;
        } else {
            //Aqui añadí el ejercicio de la guia de hacer que el programa diga si el número que busca adivinar es más alto o más bajo 
            if (numero > numeroAleatorio){
                pista = alert("El número que buscas adivinar es más bajo");
            } else{
                pista = alert("El número que buscas adivinar es más alto");
            }
            mensaje = `Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos`;
        }

        //Aumentamos el valor de los intentos
        intentos++
    } else {
        mensaje = `Su numero de intentos ha terminado.
        El numero oculto era: ${numeroAleatorio}. Refresque la pagina para volver a jugar`;
    }

    parrafo.innerHTML = mensaje;
}