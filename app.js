/*
==========================================================================================================
| Lógica de programación: explorar funciones y listas
| 04. Listas
| ONE Oracle Next Education y Alura
| Juego del número secreto
==========================================================================================================
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoJuegos = 5;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //Numero Maximo de Intentos antes de reiniciar el juego
    if (intentos == numeroMaximoJuegos) {
        asignarTextoElemento('p', `Llegaste al número máximo de intentos (${intentos}) permitidos. No Acertaste!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled','true');
    }
    else {
        if (isNaN(numeroDeUsuario)) {
            asignarTextoElemento('p', `Ingresar un número para jugar`);
            //console.log(parseInt(document.getElementById('valorUsuario').value));
            intentos++;
        }else{

             if (numeroDeUsuario === numeroSecreto) {
                asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                document.getElementById('intento').setAttribute('disabled','true');
            } else {
                //El usuario no acertó.
                if (numeroDeUsuario > numeroSecreto) {
                    asignarTextoElemento('p', 'El número secreto es menor');
                } else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
                intentos++;
                limpiarCaja();
            }
        }
    }
       
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto);
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
    document.getElementById('intento').removeAttribute('disabled');
    
}

condicionesIniciales();
//==========================================================================================================


/*
//==========================================================================================================
// PREGUNTAS SOBRE EL CODIGO
//==========================================================================================================
*/
// PREGUNTAS 1: Has sido encargado(a) de crear un pequeño programa para gestionar una lista de compras. El programa debe permitir que el usuario agregue elementos a la lista y luego mostrar el contenido de la lista en la pantalla. Además, el usuario debe poder ver un elemento específico de la lista ingresando el índice del elemento deseado.

/*
let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
*/
/*
listaCompras.length muestra la cantidad de elementos de una lista.
La propiedad "length" se utiliza para obtener la cantidad de elementos en una lista o array en JavaScript.

Alternativa correta
El código listaCompras[3] mostrará el elemento Pan.
El código listaCompras[3] en realidad mostrará el elemento "Pan", ya que el índice 0 corresponde a "Manzana", 1 a "Arroz", 2 a "Leche" y 3 a "Pan".
*/

// PREGUNTAS 2: Tu jefe te ha pedido que crees una función para sortear libros a los clientes.
/*
function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}

//Correcta! Esta respuesta es correcta porque sigue la lógica enseñada en el curso de programación. En este código, se genera un número aleatorio para elegir un libro y luego se verifica si se ha alcanzado el límite de libros sorteados. Si es así, la lista de libros sorteados se reinicia para comenzar de nuevo el sorteo.
*/

//==========================================================================================================
//Lógica de programación: explorar funciones y listas `
//04. Listas
//DESAFIO: Hora de Practicar
//==========================================================================================================

/*
//==========================================================================================================
//ACTIVIDAD 1: Crea una lista vacía llamada "listaGenerica".
//-----------------------------------------------------------------------------------------------------------

let listaGenerica = [];
*/
/*
//==========================================================================================================
//ACTIVIDAD 2: Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//-----------------------------------------------------------------------------------------------------------

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];


//==========================================================================================================
//ACTIVIDAD 3: Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//-----------------------------------------------------------------------------------------------------------

lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang');


//==========================================================================================================
//ACTIVIDAD 4: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//-----------------------------------------------------------------------------------------------------------

function mostrarElementosListaAscendente(){
    for (let i = 0; i < lenguajesDeProgramacion.length ; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarElementosListaAscendente();


//==========================================================================================================
//ACTIVIDAD 5: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
//-----------------------------------------------------------------------------------------------------------

function mostrarElementosListaDescendente(){
    for (let i = lenguajesDeProgramacion.length-1 ; i >= 0 ; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarElementosListaDescendente();


//==========================================================================================================
//ACTIVIDAD 6: Crea una función que calcule el promedio de los elementos en una lista de números.
//-----------------------------------------------------------------------------------------------------------


let listaNumeros = [5,10,15,20,25,30];
let resultado = 0;
let promedio = 0;

function calculoPromedioNumerosLista(listaNumeros){
    console.log(listaNumeros.length);
    for (let i = 0; i < listaNumeros.length; i++) {
        console.log(`i : ${i}`);
        //console.log(Typeof(listaNumeros(i)));
        console.log(`${listaNumeros[i]}`);
        resultado = resultado + listaNumeros[i]; // resultado += listaNumeros[i];
    }
    console.log(`Resultado ${resultado}, Longitud Array ${listaNumeros.length} `);
    promedioNumeros = resultado / listaNumeros.length;
    return promedioNumeros;
}
    
promedio = calculoPromedioNumerosLista(listaNumeros);
console.log(`Promedio : ${promedio}`);


//==================================================================================================
//ACTIVIDAD 7: Crna función que muestre en la consola el número más grande y el número más pequeño en una lista.
//-----------------------------------------------------------------------------------------------------------

let listaNum = [2,8,10,50,90,80,1];
let maximo = listaNum[0];
let minimo = listaNum[0];

function MostrarMaximoMinimo(listaNum){
    for (let i = 0; i < listaNum.length; i++) {
        if(listaNum[i] > maximo){
            maximo = listaNum[i];
        } else if(listaNum[i] < minimo){
            minimo = listaNum[i]   
        } 
    }
    console.log(`Max : ${maximo} `);
    console.log(`Min : ${minimo} `);
    return;
}

MostrarMaximoMinimo(listaNum);



//======================================================================================================
//ACTIVIDAD 8: Crea una función que devuelva la suma de todos los elementos en una lista.
//-----------------------------------------------------------------------------------------------------------


function sumarLista(listaNumerosSumar) {
    let resultadoSuma = 0;
    for (let i = 0; i < listaNumerosSumar.length; i++) {
        resultadoSuma += listaNumerosSumar[i];
    }
    return resultadoSuma;
}

let listaNumerosSumar = [20,30,40,50,1,10,9];
let Suma = sumarLista(listaNumerosSumar); 
console.log(`Resultado Sumar Numeros de Array: ${Suma}`);

//==========================================================================================================
//ACTIVIDAD 9: Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//-----------------------------------------------------------------------------------------------------------

function buscarElemento(lista,buscarElemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == buscarElemento){
            return i; // Encontro el elemento
        }
    }
    return -1; // No encontro el elemento
}

let lista = [2,8,50,10,60,40];
let valorbuscar = 40;
let resultadoBusqueda = buscarElemento(lista,valorbuscar);
console.log(`El elemento ${valorbuscar}, ${resultadoBusqueda == -1 ? 'no existe en la lista': 'existe en la lista'}`);

   
//==========================================================================================================
//ACTIVIDAD 10: Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//-----------------------------------------------------------------------------------------------------------

function sumaListas(lista1,lista2) {
    
    let SumaDosArray = lista1.map((item, ix) => item + lista2[ix]);
    return SumaDosArray;
    }
    
let lista1 = [2,8,50,10,60,40];
let lista2 = [1,9,60,20,70,50];
let operacionSumaListas = sumaListas(lista1,lista2);
console.log(operacionSumaListas);

//==========================================================================================================
//ACTIVIDAD 11: Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
//-----------------------------------------------------------------------------------------------------------

function cuadradoListas(lista) {
    
    let ListaCuadrado = lista.map((item, ix) => Math.pow(lista[ix],2));
    return ListaCuadrado;
    }
    
let lista = [2,8,50,10,60,40];
let operacionCuadradoLista = cuadradoListas(lista);
console.log(operacionCuadradoLista);

*/ 