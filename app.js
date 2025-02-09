/*
==========================================================================================================
| Lógica de programación: explorar funciones y listas `
| 03. Reiniciando el Juego
| CODIGO INICIAL DEL AULA2
==========================================================================================================
*/
/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
        if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // El numeral es para que sepa que lo quiero buscar por el Id.
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

//==========================================================================================================
*/

/*
//==========================================================================================================
// PREGUNTAS SOBRE EL CODIGO
//==========================================================================================================

// PREGUNTAS 1: calcularPromedio(nota1, nota2, nota3, nota4) => Esta función recibe las cuatro notas del estudiante como parámetros y devuelve el promedio calculado con base en esas notas.
//verificarAprobacion(promedio) => Esta función recibe el promedio del estudiante como parámetro y devuelve "Aprobado" si el promedio es mayor o igual a 5, en caso contrario, devuelve "Reprobado".

function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

//Esa función realiza el calculo del promedio y devuelve el valor como retorno de la función.

function verificarAprobacion(promedio){
         return promedio >= 5 ? "Aprobado" : "Reprobado";
}

//¡Exacto! La función verifica si el promedio pasado como parámetro es mayor o igual a 5 y devuelve un valor en formato de texto que informa si fue aprobado o reprobado.
*/

/*
//PREGUNTA 2: El siguiente código en JavaScript calcula el doble y el triple de un número proporcionado. Tu tarea consiste en seleccionar las opciones que sigan las mejores prácticas de programación y ayuden a mejorar la legibilidad y mantenibilidad del código.

function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;

  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}

const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado);

function calcularDoble(numero) {
    return numero * 2;
  }
  
  function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
  
  //Esta opción es correcta porque divide la funcionalidad en dos funciones separadas, calcularDoble y calcularTriple, lo que mejora la modularidad y facilita la comprensión del código. Además, utiliza variables explícitas (doble y triple) para almacenar los resultados, lo que hace que el código sea más legible.

function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);
  */

//==========================================================================================================
//Lógica de programación: explorar funciones y listas `
//03. Reiniciando el Juego
//DESAFIO: Hora de Practicar
//==========================================================================================================
/*
//==========================================================================================================
//ACTIVIDAD 1: Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
// altura en metros y peso en kilogramos, que se recibirán como parámetros.
//-----------------------------------------------------------------------------------------------------------

function IndiceMasaCorporal(estaturaMetros,pesoKilogramos){
    let imc = pesoKilogramos / (estaturaMetros * estaturaMetros);
    return imc;
}

//Ejemplo :
let imc2 = IndiceMasaCorporal(1.72,60);
console.log(imc2);
//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 2: Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//-----------------------------------------------------------------------------------------------------------
function CalculoFactorial(numero){
    let factorial = numero;
    let resultado = numero;
 
    if (numero == 0 || numero == 1) {
        return 1 ;
    } else {
        while ( factorial > 1 ) { 
            resultado = resultado * (factorial -1)
            factorial--;
           }
           return resultado;
    }
}

// Ejemplo 
let valor = 5
let FactorialEjecucion = CalculoFactorial(valor);
console.log(`El factorial de ${valor} es ${FactorialEjecucion}`);

//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 3: Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
// equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
// Para esto, considera la cotización del dólar igual a R$4,80.
//-----------------------------------------------------------------------------------------------------------


function CambioDolaresPesos(montoDolares) {
    let tasaDeCambio = 4800;
    let valorPesos = montoDolares * tasaDeCambio;
    return valorPesos;
}

// Ejemplo:
let  dolares = 100;
let  pesos = CambioDolaresPesos(dolares);
console.log(`${dolares} dolares en COP$ ${pesos}`);

//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 4: Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.
//-----------------------------------------------------------------------------------------------------------

function CalcularAreaPerimetroRectangulo(alto,ancho) {
    let Area = alto * ancho;
    let Perimetro = (alto + ancho) * 2;
    return; 
}

// Ejemplo:
let  altoRectangulo = 10;
let  anchoRectangulo = 20;
let calculo = CalcularAreaPerimetroRectangulo(altoRectangulo,anchoRectangulo);
console.log(calculo);
//Pregunto en Grupo
 
//-----------------------------------------------------------------------------------------------------------
*/


//==========================================================================================================
//ACTIVIDAD 5: Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//-----------------------------------------------------------------------------------------------------------

function CalcularAreaPerimetroCirculo(radio) {
    let Pi = 3.14;
    let Area = Pi * (radio * radio) ;
    let Perimetro = 2 * Pi * radio;
    console.log(`Area : ${Area} , Perimetro: ${Perimetro}`)
    return; 
}

// Ejemplo:
let  radio = 10;
let calculocirculo = CalcularAreaPerimetroCirculo(radio);
console.log(`Area : ${CalcularAreaPerimetroCirculo(radio)} , Perimetro: ${CalcularAreaPerimetroCirculo(radio)}`)
//-----------------------------------------------------------------------------------------------------------


/*
//==========================================================================================================
//ACTIVIDAD 6: Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
//-----------------------------------------------------------------------------------------------------------

function tablaDeMultiplicar(numero) {
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
    return ;
}

// Ejemplo:
let  numeroTabla = 10;
tablaDeMultiplicar(numeroTabla);

//-----------------------------------------------------------------------------------------------------------
*/