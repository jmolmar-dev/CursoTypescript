import { promises } from "dns";

console.log("Hola mundo");

/**
 * 1.- Tipos de Datos
 * string
 * number - enteros y decimales
 * boolean - true / false
 * void (?)
 * null
 * undefined
 */

var nombre:string = "Jose"; // Variable Global
let apellido:string = "Rodriguez"; //Variable Local
const PI:number = 3.1415; //Constantes --> durante la ejecucion del codigo no podremos modificar su valor 

console.log("Hola" + "Mundo");
console.log(nombre+apellido);
console.log(nombre,apellido);
console.log(`Hola${nombre}${apellido}`); //inyeccion del contenido de una variable

let a:string ="pepe", b:string = "juan";


//Arrays de Datos
let alumnos:string[] = ["Juan","Jose","Alex"];
let personas: string [] = ["Lucia"];
/*Factor de propagacion en listas */
let union:string[] = [...alumnos,...personas];
/*Nos podemos ayudar del entorno para esto , Podemos combinar distintos tipos en las
listas, y se tiparan todos */
let valores:(string | number | boolean)[] = [false,"Hola",23];
console.log(union);


/* Clase 26/09/2024*/

/*Comenzamos declarando los objetos: 1º forma --> Estructura de Datos */

let misDatos = {
    nombre: "Jose",
    apellidos:"Rodriguez",
    edad: 18
}

let configuracion = {
    versionTS: "Es6",
    versionCodigo : "1.0",
    ...misDatos
}

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(`${propiedad1}${propiedad2}`);

/*2º forma --> Enum (como en java) */

/*Asignamos clave valor a los enum, para poder compararlos posteriormente sin tener que acceder a su indice */

enum EstadoTarea {
    "Pendiente" ="P",
    "Enproceso" = "E",
    "Terminado"= "T"
};



let estadoPendiente:EstadoTarea = EstadoTarea.Enproceso;

console.log(EstadoTarea.Pendiente);

/*
if (estadoTarea.Enproceso == "E"){

} */

/* 3º Forma --> Interfaces: objeto ya predefinido, lo podre volver a usar, pero tendra que tener siempre las caracteristicas predefinidas*/
interface Tarea{
    nombre: string,
    prioridad: number,
    estado : EstadoTarea
}

/* Vamos a instanciar ahora: */
let tarea1:Tarea = {nombre:"Tarea1",prioridad:2,estado:EstadoTarea.Enproceso};

/*4º Forma --> TIPOS*/
type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}

type Administrativo ={
    fotocopia:number,
    
}

/*Si deseo un objeto con las propiedades de ambos: */
let empleado2: Empleado & Administrativo;
empleado2 = {nombre:"Pepe",edad:23,sueldo:4000,fotocopia:200}; //No tenemos porque respetar el orden


let empleado1:Empleado = {nombre:"Juan",edad:23,sueldo:3400};
console.log(empleado1.edad);

/*Operadores de Control */

//Operador Ternario --> ? : funciona como un if-else
//condicion ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : `La tarea ${tarea1.nombre} aun no se ha ejecutado`);

//Estructura if-else

if (empleado2.sueldo > empleado1.sueldo){
    console.log(`El empleado ${empleado2.nombre} gana mas que el empleado ${empleado1.nombre}`);
}else{
    console.log(`El empleado ${empleado1.nombre} gana mas que el empleado ${empleado2.nombre}`);
}

//SWITCH: 
switch (tarea1.estado){
    
    case "P":
    console.log("Tarea Pendiente");
    break;

    case "E":
    console.log("Tarea en Proceso");
    break;

    case "T":
    console.log("Tarea terminada");
    break;

    default:
    console.log("Otro estado o no tiene estado");
    break;


}

/*Estructura try-catch --> DUDA*/
try{
let numero1:number = 1;
console.log(numero1.toString);
}catch (error){
    console.log("Se ha producido un error al convertir un numero en String",error);
}

/*Bucles */

let listadeTareas : Tarea[] = [

    {
        nombre : "Tarea 1",
        prioridad : 4,
        estado : EstadoTarea.Enproceso
    },
    {
        nombre : "Tarea 2",
        prioridad : 8,
        estado : EstadoTarea.Pendiente
    },
    {
        nombre : "Tarea 3",
        prioridad : 10,
        estado : EstadoTarea.Terminado
    }
]

/*Comenzamos con el bucle for each, que verdaderamente actua como una funcion 
ya que recibe parametros */

/*Se le podria incluir tambien la lista de las tareas como parametro de entrada antes de la =>*/ 
listadeTareas.forEach(
    (tarea:Tarea, index:number) => {
        console.log(`${index} - ${tarea.nombre}`);
    });




/*Bucle For: */
for (let index = 0; index < listadeTareas.length; index ++){
    const tarea = listadeTareas[index];
    console.log(`${index} - ${tarea.nombre}`);
}


/*Bucles While*/
/*con != comparo valores pero no tipos, con !== comparo ambas cosas */
while (tarea1.estado == EstadoTarea.Enproceso){
    if (tarea1.prioridad == 5){
        tarea1.estado = EstadoTarea.Terminado;
        break;
    }else{
        tarea1.prioridad++;
    }
}
 

/*Bucle Do-While --> Se ejecutará al menos una vez*/
do {
    tarea1.prioridad++;
} while (tarea1.prioridad < 15);

/*Asignacion multiple de variables: */
let perro = {
    raza : "Doberman",
    edad : 22
}

/*Declaracion 1 a 1 */
let miRaza = perro.raza;
let miEdad = perro.edad;


/*Declaracion con factor de propagacion */
let {raza:string, edad:number} = perro;


/*Factor de propagacion en objetos */

let estadoAplicacion = {
    usuario : "admin",
    password : "hola123",
    sesion : 4
}

/*Se esta modificando el valor del objeto de arriba, es un objeto propagado donde estamos seteando una de las propiedades*/
let nuevoEstado = {
    ...estadoAplicacion,
    sesion : 5              
}

/*Comienzo de la 3ª Sesion del Curso --> Funciones*/

/*Introduccion Funciones */

/**
 * Funcion que nos muetra un saludo por consola
 */
function saludarporConsola() {
    /*Podemos declarar variables locales con let, que solo
    serviran dentro de nuestra propia funcion*/
    let nombre:string = "Pepillo"
    console.log(`Hola ${nombre}`);
}

/*Llamamiento de las funciones --> icono de cuadrado en VSC*/
saludarporConsola();

/*Funcion con parametros --> en este caso 1 string */
/**
 * Funcion que muestra un saludo por consola a la persona especificada
 * @param nombrePersona - nombre de la persona a saludar
 */
function saludarConParametro(nombrePersona:string) {
    console.log(`¡Hola! ${nombrePersona}`);
}

saludarConParametro("Martin");


/**
 * Funcion que se despide de pepe
 * @param nombre 
 */
function despedirPersona(nombre:string = "Pepe") {
    console.log(`Adios ${nombre}`);
}

/*A la funcion de arriba, si no le indicamos ningun parametro se 
despedira de pepe, sin embargo, le podremos introducir cualquier otro nombre.
En este caso, se puede ejecutar de las dos formas*/
despedirPersona();
despedirPersona("Alba");

/* El parametro sera String o bien undefined*/
/**Funcion que muestra un adios por consola
 * @param nombre (Opcional) nombre de la persona a despedir
 */
function despedidaOpcional (nombre ?:string){
    if (nombre){
        console.log(`Adios ${nombre}`);
    }else{
        console.log("Adios anonimo");
    }
}

despedidaOpcional(); //Adios anonimo
despedidaOpcional("Paco"); //Adios Paco

/**
 * Funcion de varios Parametros
 * @param nombre 
 * @param apellidos 
 * @param edad 
 */
function variosParam (nombre:string = "Juan",apellidos?:string, edad:number = 18){
    if (apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }else{
        console.log(`${nombre} tiene ${edad} años`);
    }
}


/*Si pongo arriba por ejemplo nombre:string = "Juan", poniendo undefined en su sitio llamariamos a ese valor*/
variosParam ("Pepe"); //Pepe tiene 18 años
variosParam("Jose","Martinez"); //Jose Martinez tiene 18 años
variosParam("Pepe","Gomez",23); //Pepe Gomez tiene 23 años
variosParam("Pepe",undefined,23); //Pepe tiene 23 años
variosParam(undefined,undefined,23);


function ejemplosVariosTipos (a : string | number){
    
    if (typeof(a) == 'string'){
        console.log("A es un string");
    }else if (typeof(a) == 'number'){
        console.log("A es un number");
    }else{
        console.log("A no es un string ni tampoco un number");
        throw Error ("A no es ni un string ni un number");
    }
}

ejemplosVariosTipos("Hola");
ejemplosVariosTipos(3);
/*ejemplosVariosTipos(true); --> no se puede, da error*/

/*Funciones anonimas*/

let fAnonima = function (){
    console.log("Hola mundo");
}

fAnonima();

let fitera = function (tarea:Tarea, indice:number){
    console.log (`La tarea es ${tarea.nombre} y esta en la posicion ${indice}`)
}

listadeTareas.forEach(fitera);


/*Funciones arrow*/
let fArrow = (tarea:Tarea, indice:number) => {
    console.log(`${indice} - ${tarea.nombre}`);
}

listadeTareas.forEach (fArrow);
//listadoTareas.forEach ((tarea:Tarea) => {console.log(`${tarea.nombre}`)}); --> No creamos la funcion arrow, se lo pasamos directamente. Tambien podriamos pasar una funcion anonima






//Funcion con return
function ejemploReturn (nombre:string, apellidos:string)/* : string |number*/{
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn ("Juanillo","Gomez");
console.log(nombreCompleto);
console.log(ejemploReturn("Martin","San Jose"));

function ejemploCadenaTexto (...nombres : string []){
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}

function ejemploCadenaTexto2 (nombres : string []){
    const ListaNombres = ["Sara","Pepe"];
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}


const listaNombres2 = ["Pepe","Ana"];

ejemploCadenaTexto("Juan","Luis","Jose","Ricardo");
/*ejemploCadenaTexto2("Jose","Luis");* --> No funcionará*/
ejemploCadenaTexto2(listaNombres2);

let empleado3:Empleado = {nombre:"Pepe",edad:23,sueldo:2300};
/*Llamaremos a una funcion flecha a partir del nombre que le hemos definido*/
const monstrarEmpleado = (empleado3:Empleado) : string => `${empleado3.nombre} tiene ${empleado3.edad} años`;

const datosdelEmpleado = (empleado : Empleado) : string => {
    if (empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilarse`;
    }else{
         return `Empleado ${empleado.nombre} está en edad laboral`;
    }
}

datosdelEmpleado(empleado3);

const obtenerSalario = (empleado : Empleado, cobrar : () => string) => {
    if (empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilarse`;
    }else{
        cobrar(); //callback a ejecutar
    }
}

obtenerSalario (empleado3, () => 'Hola Pepe'); //De esta forma, ejecutaremos la parte del else (callback)


/*Funciones Asincronas:*/

async function ejemploAsincrona () :Promise<string>{
    await console.log("Tarea a completar antes de seguir con la secuencia de intrucciones");
    console.log("Tarea Completada");
    return "Hola";
}


ejemploAsincrona().then ((respuesta) => {
    console.log("Respuesta",respuesta);
})





/*Generada*/
function* ejemploGenerada (){
    let index:number = 0;
    while (index < 5){
        yield index++;
    }
}

/*La funcion generadora será almacenada dentro de una variable --> La podremos pausar y reanudar*/
let generadora = ejemploGenerada();
console.log(generadora.next().value);//0
console.log(generadora.next().value);//1

function* watcher(valor:number){
    yield valor; //emitimos el valor inicial
    yield*worker(valor); //Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4;
}



function* worker (valor:number){
        yield valor +1;
        yield valor +2;
        yield valor +3;
}

let generatorSaga = watcher (0);

console.log(generatorSaga.next().value); // 0 (lo ha hecho el Watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el Watcher)

/*Apuntes 07-10-2024*/


/**
 * CALLBACK
 */

let fsuma = function suma (a:number, b:number){
    return a+b;
}

let fresta = function resta (a:number, b:number){
    return a-b;
}

let fmultiplica = function multiplica (a:number, b:number){
    return a*b;
}

function opera (x:number, y:number, funcion:(a:number, b:number) => number){
    return funcion (x,y);
}

opera (1,2,fsuma); /*Sumarás 1 y 2*/
opera (4,2,fresta); /*Restarás 4 y 2*/
opera (4,2,fmultiplica);





/**
 * Funciones Asincronas
 */




async function asicrona() {
    
    let suma:number = 0;
    for (let i = 0; i < 1000000; i++){
        suma += i;
    }
    return suma;

}

asicrona().then((data:number) => {console.log(`El resultado de ejecutar asyc = ${data}`)});
console.log("Línea de Código posterior a llamada asíncrona");


/*Definimos un nuevo tipo de objetos para casteal el JSON*/
type University =  {
    domains:string[],
    alpha_two_code:string,
    name:string
}



/*Todas las funciones asincronas devolvera una promesa*/
async function getDataUniversity() : Promise <University[]> {
    
    const data = await fetch("hhtp://universities.hipolabs.com/search?country=Spain");
    let respuesta:Promise<University[]> = await data.json() as Promise<University[]>;
    return respuesta;

}

getDataUniversity().then((data:University[]) => {
    data.forEach ((universidad) => {
        console.log (universidad.name);
    })
})

/*getDataUniversity().then ((data:University[]) => {
    for (let i = 0; i < data.lenght; i++){
    console.log (data[i].name)
})}*/

/**
 * Funciones Generadoras
 */

function* fGeneradora (): Generator <Tarea>{
    for (let tarea  in listadeTareas){
        yield listadeTareas[tarea]
    }
}

let funcionGen = fGeneradora();
/*Se iran devolviendo posicion a posicion*/
console.log(funcionGen.next());
console.log(funcionGen.next());



/*Clase 09-10-2024*/

/*Repaso Funciones Generadoras*/

function* fGeneradora2 () : Generator <String> {
    yield "Hola";
    yield "Mundo";
}

let funcionGen2 = fGeneradora2();

let str = funcionGen2.next(); // Obtiene el primer valor del iterador.




type WebPage = {
    Name:string,
    Domain:string,
    Description:string
}


/*Mezclando funciones generadores y asincronas*/
async function* obtenerDatosWeb() : AsyncGenerator <WebPage>{
    let peticion = await fetch ("https://haveibeenpwned.com/api/v2/breaches");
    let datos:WebPage[] = await peticion.json() as WebPage[];


    for (let index = 0; index < datos.length; index++){
        yield datos[index];
    }
    
}


let datosWebPage = obtenerDatosWeb();

/*En cada un de estos next(), iremos iterando sobre los elementos del JSON y sacaemos de cada posicion la informacion necesaria*/
datosWebPage.next().then(
    ({value,done}) => {
        console.log(value.Name);
    }
);


datosWebPage.next().then(
    ({value,done}) => {
        console.log(`${value.Name} - ${value.Description}`);
    }
); 


/*SobreCargas de Funciones*/

function hola (nombre:string):string;
function hola (nombre:string, apellid:string):string;
function hola (nombre:string, apellido:string, edad?:string):string;

function hola (nombre:string, apellido?:string, edad?:string){
    let saludo = `Hola ${nombre}`;
    if (apellido != undefined){
        saludo = saludo + `${apellido}`;
    }

    if (edad != undefined){
        saludo = saludo + `${edad}`;
    }

    return saludo;
}



/*Ejercicio 2 Practica 1.1*/
/**
 * Almacena la informacion en un sessionStorage o en un localStorage en funcion del tipo indicado
 * @param type - tipo que se le indica a la hora de almacenar la informacion
 * @param key  - clave con la que queremos que se guarde la informacion
 * @param data - lista de Tareas desde donde extraeremos dicha informacion
 */
function ejercicio2 (type:string = "SessionStorage", key:string, data:Tarea[] ){
    if (type == 'session'){
        sessionStorage.setItem(key,JSON.stringify(data));
        console.log ("La información de las tareas ha sido almacenada en SessionStorage");
    }else if (type == 'local') {
        localStorage.setItem(key, JSON.stringify(data));
        console.log ("La información de las tareas ha sido almacenada en LocalStorage");
    }


}

/*Ejercicio 3 Practica 1.1* --> Vamos a ejecutar la funcion anterior tal y como se nos indica en el enunciado del documento */
ejercicio2 ("session", "datos", listadeTareas);
ejercicio2 ("local", "datos", listadeTareas);


/*Ejercicio 4 Practica 1.1*/
/**
 * Metodo que nos permite recuperar la informacion almacenada en SessionStorage y LocalStorage
 * @param type - forma en la que gestionaremos la información almacenada (session para SessionStorage y local para LocalStorage)
 * @param key - clave mediante la cual deseamos recuperar la informacion
 * @returns 
 */
function ejercicio4 (type:string = "session", key:string) : string | null{
    let recuperar:string|null;    
    if (type == "session"){
            recuperar = sessionStorage.getItem(key);

    }else if (type == "local"){
            recuperar = sessionStorage.getItem(key);
    }else{
            recuperar = null;
    }

    console.log (`Datos recuperados de ${type}Storage con la clave ${key}`);
     return recuperar;

}

/*Ejercicio 5 Practica 1.1 --> Probaremos la funcion del ejercicio 4*/
sessionStorage.setItem("session","Este es el valor que hemos agregado dentro de sessionStorage");
sessionStorage.setItem("local","Este es el valor que hemos agregado dentro de localStorage");

ejercicio4("session","session");
ejercicio4("local","local");


/**
 * Funcion que nos permite borrar informacion bien almacenada en sessionStorage o LocalStorage
 * @param type - tipo del que se desea borrar la información (SessionStorage o LocalStorage)
 * @param key  - clave con la que deseamos borrar la informacion
 */
/*Ejercicio 6 Practica 1.1*/
function ejercicio6 (type:string, key:string){
    if (type == "session"){
        sessionStorage.removeItem(key);
        console.log (`Informacion borrada de tipo ${type} mediante la clave ${key}`);
    }else if (type == "local"){
        localStorage.removeItem (key);
        console.log (`Informacion borrada de tipo ${type} mediante la clave ${key}`);
    }else{
        console.log (`tipo de almacenamiento introducido no valido ${type}`);
    }
}

ejercicio6("session","datos");
ejercicio6("local", "datos");

/*Ejercicio 7 Practica 1.1*/
import Cookies  from "js-cookie";

//Crea una cookie llamada nombre con tu nombre que expire a los 7 días y sea accesible desde el path /
Cookies.set('nombre', 'Juan', {expires : 7, path: '/'});

//Crea una cookie llamada apellidos con tu apellido que expire a los 2 días
Cookies.set('apellidos','Molero', {expires:2});

//Crea una cookie llamada email con un email que expire a los 4 días.
Cookies.set ('email','jmolero0896@gmail.com');

//Recupera todas las cookies anteriores.
let nombreCookies = Cookies.get('nombre');
let apellidosCookies = Cookies.get('apellidos');
let emailCookies = Cookies.get('email');

console.log(nombreCookies);
console.log(apellidosCookies);
console.log(emailCookies);

//Borra todas las cookies anteriores
Cookies.remove('nombre');
Cookies.remove('apellidos');
Cookies.remove ('email');

