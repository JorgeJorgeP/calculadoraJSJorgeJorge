/*En el Javascript crearemos cinco funciones para que la calculadora funcione: 
    - 1ª Función que actúa nada más cargar la página y se localiza el div de la pantalla para escribir en ella.
    - 2ª Función que muestra el número que hemos accionado a través de los botones.
    - 3ª Función que hace las operaciones.
    - 4ª Función que te da el resultado de la operación accionando el botón de "=".
    - 5ª Funición que borra el contenido de la pantalla.
*/

//1ª Función.
window.onload = function(){ //Esta función actúa tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    }

//Definición de las variables necesarias para la calculadora
    x="0"; /*guardar el número en pantalla, por lo tanto toda variación del número que
           hay en pantalla debe ir acompañada de una variación en el valor de esta variable.*/
    xi=1; /*inicia el número en pantalla. Variable con dos posibles valores:
        - 1 cuando debamos empezar a escribir un nuevo número en la pantalla;
        - 0 cuando al escribir en la pantalla estemos añadiendo cifras para completar un número*/
    ni=0; //guarda el primer número que hay en pantalla mientras se escribe el segundo.
    op="no"; //recoge el tipo de operación; "no" = sin operaciones pendientes.

//2ª Función. Controla la escritura en pantalla:
function numero(xx) { //recoge el número pulsado.
    if (x=="0" || xi==1  ) { /*inicializar un número, se usa un condicional:
        que en pantalla debe haber escrito un 0, o que le hayamos dado la orden el alguna otra parte del script mediante la variable xi=1.
        Si se cumplen se escribe un número nuevo, si no, se añade la cifra a las cifras que ya hay.*/
        pantalla.innerHTML=xx; //muestra el número en pantalla.
        x=xx; //x se modifica de la misma manera que el número de pantalla, de manera que tenga el mismo valor que el número mostrado.
    } else { //continuar escribiendo números
        pantalla.innerHTML+=xx; //añadirlos y mostrarlos en pantalla
        x+=xx //se añaden y guardan
    }
    xi=0 //modificar la variable xi=0 para poder seguir escribiendo cifras en el mismo número.
    //Tanto el número de pantalla como la variable x son cadenas de texto, ya que de otro modo en lugar de añadirse el número, éste se sumaría al anterior
}

//3ª Función. Controla los botones de operación y los relaciona con los números que van a ser operados.
function operar(s) {
    igualar() //si hay operaciones pendientes se realizan primero
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardar tipo de operación.
    xi=1; //inicializar pantalla para escribir los siguientes números con los que se va a operar.
}	

//4ª Función. Realiza la operación entre dos números al presionar "=".
function igualar() {
    //primero comprueba si hay alguna operación pendiente con if y si no es así, dejará el número como está.
    if (op=="no") {
    pantalla.innerHTML=x;	//mostrar el mismo número	
    }
    //si hay alguna operación pendiente la resuelve y la muestra en pantalla.
    else {
    sl=ni+op+x; // escribir la operación en una cadena
    sol=eval(sl) //convertir la cadena a código con eval() y resuelve la operación.
    pantalla.innerHTML=sol //mostramos la solución
    x=sol; //guardamos la solución
    op="no"; //borra operaciones pendientes
    xi=1; //se puede reiniciar la pantalla.
    }
}

//5ª Función. Borra todo para empezar de nuevo.
function borradoTotal() {
    pantalla.innerHTML=0; //poner la pantalla a 0 para que se cumplan las condiciones de la 2ª función.
    x="0"; //reiniciar número en pantalla
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación pendiente si la hay.
}