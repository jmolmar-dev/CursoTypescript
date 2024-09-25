console.log("Hola mundo");

/**
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


