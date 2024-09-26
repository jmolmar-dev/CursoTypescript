console.log("Hola mundo");

/**
 * 1.- Tipos de Datos
 * string
 * number - enteros y decimales
 * boolean - true / false
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
let union:string[] = [...alumnos,...personas];
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
console.log(`${propiedad1}${propiedad2}`)

/*2º forma --> Enum (como en java) */

/*Asignamos clave valor a los enum, para poder compararlos posteriormente sin tener que acceder a su indice */
enum estadoTarea {"Pendiente" ="P","Enproceso" = "E","Terminado "= "T"}
let estadoPendiente = estadoTarea.Enproceso;

console.log(estadoTarea.Pendiente);

/*
if (estadoTarea.Enproceso == "E"){

} */

/* 3º Forma --> Interfaces: objeto ya predefinido, lo podre volver a usar, pero tendra que tener siempre las caracteristicas predefinidas*/
interface Tarea{
    nombre: string,
    prioridad: number,
    estado : estadoTarea
}

/* Vamos a instanciar ahora: */
let tarea1:Tarea = {nombre:"Tarea1",prioridad:2,estado:estadoTarea.Enproceso}

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
empleado2 = {nombre:"Pepe",edad:23,sueldo:4000,fotocopia:200} //No tenemos porque respetar el orden


let empleado1:Empleado = {nombre:"Juan",edad:23,sueldo:3400}
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

/*Estructura try-catch*/
try{
let numero1:number = 1;
console.log(numero1.toString);
}catch (error){
    console.log("Se ha producido un error al convertir un numero en String",error);
}