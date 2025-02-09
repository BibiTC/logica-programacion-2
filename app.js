/*
==========================================================================================================
| Lógica de programación: explorar funciones y listas `
| 02. Funciones
| CODIGO INICIAL DEL AULA2
==========================================================================================================
*/


let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
console.log(typeof(numeroDeUsuario));    
console.log(numeroSecreto);
console.log(typeof(numeroSecreto));    
console.log(numeroDeUsuario)
console.log(numeroDeUsuario === numeroSecreto); //Valores iguales en valor y tipo de dato

    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

//==========================================================================================================


/*
//==========================================================================================================
// PREGUNTAS SOBRE EL CODIGO
//==========================================================================================================

// PREGUNTAS 1: ¿¿Cómo puedes cambiar el texto del elemento h2 en tu página a "Has agregado una nueva canción!" usando los conceptos del curso "Lógica de programación: explore funciones y listas"?

let h2 = document.querySelector('h2');
h2.innerHTML = 'Has agregado una nueva canción!';

Al seleccionar el elemento h2 con el método querySelector y cambiar el texto con innerHTML, estás utilizando correctamente los conceptos enseñados en el curso.

// PREGUNTA 2 : Tu tarea es implementar una función que reciba como parámetro un número entero y muestre un mensaje en la consola según las siguientes reglas:
// En este código, utilizamos la estructura de control if-else para verificar las tres posibilidades: si el número es mayor que cero, si es menor que cero o si es igual a cero. Dependiendo de la condición, la función imprime el mensaje correspondiente en la consola."

function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es zero.");
  }
}

/*
//==========================================================================================================
//Lógica de programación: explorar funciones y listas `
//02. Funciones
//DESAFIO: Hora de Practicar
//==========================================================================================================
*/

/*
//==========================================================================================================
//ACTIVIDAD 1: Crear una función que muestre "¡Hola, mundo!" en la consola.
//-----------------------------------------------------------------------------------------------------------

function MensajeSaludo() {
    console.log('¡Hola, mundo!');
} 

MensajeSaludo();

//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 2: Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
//-----------------------------------------------------------------------------------------------------------

function MensajeSaludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

MensajeSaludoNombre('Bibiana');

//-----------------------------------------------------------------------------------------------------------
*/


/*
//==========================================================================================================
//ACTIVIDAD 3: Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
//-----------------------------------------------------------------------------------------------------------

function DuplicarValor(numero) {
    return numero * 2;
}

let ResultadoDuplicar = DuplicarValor(8);

console.log(ResultadoDuplicar);

//-----------------------------------------------------------------------------------------------------------
*/


/*
//==========================================================================================================
//ACTIVIDAD 4: Crear una función que reciba tres números como parámetros y devuelva su promedio.
//-----------------------------------------------------------------------------------------------------------

function Promedio(num1,num2,num3) {
    return (( num1 + num2 + num3 )/3); 
}

let resultadoPromedio = Promedio(2,2,2);
console.log(resultadoPromedio);
//-----------------------------------------------------------------------------------------------------------
*/



//==========================================================================================================
//ACTIVIDAD 5: Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
//-----------------------------------------------------------------------------------------------------------
/*
//function numeroMayor(num1,num2) {
//    if(num1>=num2) {
//        return num1;        
//    }else{
//        num2;
//        return num2;
//    }; 
//}
*/

/*
function numeroMayor(num1,num2){
    return num1 > num2 ? num1 : num2 ;
}

let resultadoNumeroMayor = numeroMayor(20,5);
console.log(resultadoNumeroMayor);
*/
//-----------------------------------------------------------------------------------------------------------



/*
//==========================================================================================================
//ACTIVIDAD 6: Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
//-----------------------------------------------------------------------------------------------------------

function Multiplicar(num1) {
    return num1 * 2 ;
}

let resultadoMultiplicar = Multiplicar(8);
console.log(resultadoMultiplicar);

//-----------------------------------------------------------------------------------------------------------

*/