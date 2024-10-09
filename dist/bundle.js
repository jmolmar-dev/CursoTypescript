/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
var nombre = "Jose"; // Variable Global
let apellido = "Rodriguez"; //Variable Local
const PI = 3.1415; //Constantes --> durante la ejecucion del codigo no podremos modificar su valor 
console.log("Hola" + "Mundo");
console.log(nombre + apellido);
console.log(nombre, apellido);
console.log(`Hola${nombre}${apellido}`); //inyeccion del contenido de una variable
let a = "pepe", b = "juan";
//Arrays de Datos
let alumnos = ["Juan", "Jose", "Alex"];
let personas = ["Lucia"];
/*Factor de propagacion en listas */
let union = [...alumnos, ...personas];
/*Nos podemos ayudar del entorno para esto , Podemos combinar distintos tipos en las
listas, y se tiparan todos */
let valores = [false, "Hola", 23];
console.log(union);
/* Clase 26/09/2024*/
/*Comenzamos declarando los objetos: 1º forma --> Estructura de Datos */
let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
};
let configuracion = Object.assign({ versionTS: "Es6", versionCodigo: "1.0" }, misDatos);
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(`${propiedad1}${propiedad2}`);
/*2º forma --> Enum (como en java) */
/*Asignamos clave valor a los enum, para poder compararlos posteriormente sin tener que acceder a su indice */
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["Enproceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
;
let estadoPendiente = EstadoTarea.Enproceso;
console.log(EstadoTarea.Pendiente);
/* Vamos a instanciar ahora: */
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Enproceso };
/*Si deseo un objeto con las propiedades de ambos: */
let empleado2;
empleado2 = { nombre: "Pepe", edad: 23, sueldo: 4000, fotocopia: 200 }; //No tenemos porque respetar el orden
let empleado1 = { nombre: "Juan", edad: 23, sueldo: 3400 };
console.log(empleado1.edad);
/*Operadores de Control */
//Operador Ternario --> ? : funciona como un if-else
//condicion ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : `La tarea ${tarea1.nombre} aun no se ha ejecutado`);
//Estructura if-else
if (empleado2.sueldo > empleado1.sueldo) {
    console.log(`El empleado ${empleado2.nombre} gana mas que el empleado ${empleado1.nombre}`);
}
else {
    console.log(`El empleado ${empleado1.nombre} gana mas que el empleado ${empleado2.nombre}`);
}
//SWITCH: 
switch (tarea1.estado) {
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
try {
    let numero1 = 1;
    console.log(numero1.toString);
}
catch (error) {
    console.log("Se ha producido un error al convertir un numero en String", error);
}
/*Bucles */
let listadeTareas = [
    {
        nombre: "Tarea 1",
        prioridad: 4,
        estado: EstadoTarea.Enproceso
    },
    {
        nombre: "Tarea 2",
        prioridad: 8,
        estado: EstadoTarea.Pendiente
    },
    {
        nombre: "Tarea 3",
        prioridad: 10,
        estado: EstadoTarea.Terminado
    }
];
/*Comenzamos con el bucle for each, que verdaderamente actua como una funcion
ya que recibe parametros */
/*Se le podria incluir tambien la lista de las tareas como parametro de entrada antes de la =>*/
listadeTareas.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
/*Bucle For: */
for (let index = 0; index < listadeTareas.length; index++) {
    const tarea = listadeTareas[index];
    console.log(`${index} - ${tarea.nombre}`);
}
/*Bucles While*/
/*con != comparo valores pero no tipos, con !== comparo ambas cosas */
while (tarea1.estado == EstadoTarea.Enproceso) {
    if (tarea1.prioridad == 5) {
        tarea1.estado = EstadoTarea.Terminado;
        break;
    }
    else {
        tarea1.prioridad++;
    }
}
/*Bucle Do-While --> Se ejecutará al menos una vez*/
do {
    tarea1.prioridad++;
} while (tarea1.prioridad < 15);
/*Asignacion multiple de variables: */
let perro = {
    raza: "Doberman",
    edad: 22
};
/*Declaracion 1 a 1 */
let miRaza = perro.raza;
let miEdad = perro.edad;
/*Declaracion con factor de propagacion */
let { raza: string, edad: number } = perro;
/*Factor de propagacion en objetos */
let estadoAplicacion = {
    usuario: "admin",
    password: "hola123",
    sesion: 4
};
/*Se esta modificando el valor del objeto de arriba, es un objeto propagado donde estamos seteando una de las propiedades*/
let nuevoEstado = Object.assign(Object.assign({}, estadoAplicacion), { sesion: 5 });
/*Comienzo de la 3ª Sesion del Curso --> Funciones*/
/*Introduccion Funciones */
/**
 * Funcion que nos muetra un saludo por consola
 */
function saludarporConsola() {
    /*Podemos declarar variables locales con let, que solo
    serviran dentro de nuestra propia funcion*/
    let nombre = "Pepillo";
    console.log(`Hola ${nombre}`);
}
/*Llamamiento de las funciones --> icono de cuadrado en VSC*/
saludarporConsola();
/*Funcion con parametros --> en este caso 1 string */
/**
 * Funcion que muestra un saludo por consola a la persona especificada
 * @param nombrePersona - nombre de la persona a saludar
 */
function saludarConParametro(nombrePersona) {
    console.log(`¡Hola! ${nombrePersona}`);
}
saludarConParametro("Martin");
/**
 * Funcion que se despide de pepe
 * @param nombre
 */
function despedirPersona(nombre = "Pepe") {
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
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
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
function variosParam(nombre = "Juan", apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
/*Si pongo arriba por ejemplo nombre:string = "Juan", poniendo undefined en su sitio llamariamos a ese valor*/
variosParam("Pepe"); //Pepe tiene 18 años
variosParam("Jose", "Martinez"); //Jose Martinez tiene 18 años
variosParam("Pepe", "Gomez", 23); //Pepe Gomez tiene 23 años
variosParam("Pepe", undefined, 23); //Pepe tiene 23 años
variosParam(undefined, undefined, 23);
function ejemplosVariosTipos(a) {
    if (typeof (a) == 'string') {
        console.log("A es un string");
    }
    else if (typeof (a) == 'number') {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es ni un string ni un number");
    }
}
ejemplosVariosTipos("Hola");
ejemplosVariosTipos(3);
/*ejemplosVariosTipos(true); --> no se puede, da error*/
/*Funciones anonimas*/
let fAnonima = function () {
    console.log("Hola mundo");
};
fAnonima();
let fitera = function (tarea, indice) {
    console.log(`La tarea es ${tarea.nombre} y esta en la posicion ${indice}`);
};
listadeTareas.forEach(fitera);
/*Funciones arrow*/
let fArrow = (tarea, indice) => {
    console.log(`${indice} - ${tarea.nombre}`);
};
listadeTareas.forEach(fArrow);
//listadoTareas.forEach ((tarea:Tarea) => {console.log(`${tarea.nombre}`)}); --> No creamos la funcion arrow, se lo pasamos directamente. Tambien podriamos pasar una funcion anonima
//Funcion con return
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Juanillo", "Gomez");
console.log(nombreCompleto);
console.log(ejemploReturn("Martin", "San Jose"));
function ejemploCadenaTexto(...nombres) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
function ejemploCadenaTexto2(nombres) {
    const ListaNombres = ["Sara", "Pepe"];
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
const listaNombres2 = ["Pepe", "Ana"];
ejemploCadenaTexto("Juan", "Luis", "Jose", "Ricardo");
/*ejemploCadenaTexto2("Jose","Luis");* --> No funcionará*/
ejemploCadenaTexto2(listaNombres2);
let empleado3 = { nombre: "Pepe", edad: 23, sueldo: 2300 };
/*Llamaremos a una funcion flecha a partir del nombre que le hemos definido*/
const monstrarEmpleado = (empleado3) => `${empleado3.nombre} tiene ${empleado3.edad} años`;
const datosdelEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilarse`;
    }
    else {
        return `Empleado ${empleado.nombre} está en edad laboral`;
    }
};
datosdelEmpleado(empleado3);
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilarse`;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
obtenerSalario(empleado3, () => 'Hola Pepe'); //De esta forma, ejecutaremos la parte del else (callback)
/*Funciones Asincronas:*/
function ejemploAsincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de intrucciones");
        console.log("Tarea Completada");
        return "Hola";
    });
}
ejemploAsincrona().then((respuesta) => {
    console.log("Respuesta", respuesta);
});
/*Generada*/
function* ejemploGenerada() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
/*La funcion generadora será almacenada dentro de una variable --> La podremos pausar y reanudar*/
let generadora = ejemploGenerada();
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
function* watcher(valor) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor); //Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el Watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el Worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el Watcher)
/*Apuntes 07-10-2024*/
/**
 * CALLBACK
 */
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
let fmultiplica = function multiplica(a, b) {
    return a * b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(1, 2, fsuma); /*Sumarás 1 y 2*/
opera(4, 2, fresta); /*Restarás 4 y 2*/
opera(4, 2, fmultiplica);
/**
 * Funciones Asincronas
 */
function asicrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 0; i < 1000000; i++) {
            suma += i;
        }
        return suma;
    });
}
asicrona().then((data) => { console.log(`El resultado de ejecutar asyc = ${data}`); });
console.log("Línea de Código posterior a llamada asíncrona");
/*Todas las funciones asincronas devolvera una promesa*/
function getDataUniversity() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("hhtp://universities.hipolabs.com/search?country=Spain");
        let respuesta = yield data.json();
        return respuesta;
    });
}
getDataUniversity().then((data) => {
    data.forEach((universidad) => {
        console.log(universidad.name);
    });
});
/*getDataUniversity().then ((data:University[]) => {
    for (let i = 0; i < data.lenght; i++){
    console.log (data[i].name)
})}*/
/**
 * Funciones Generadoras
 */
function* fGeneradora() {
    for (let tarea in listadeTareas) {
        yield listadeTareas[tarea];
    }
}
let funcionGen = fGeneradora();
/*Se iran devolviendo posicion a posicion*/
console.log(funcionGen.next());
console.log(funcionGen.next());
/*Clase 09-10-2024*/
/*Repaso Funciones Generadoras*/
function* fGeneradora2() {
    yield "Hola";
    yield "Mundo";
}
let funcionGen2 = fGeneradora2();
let str = funcionGen2.next(); // Obtiene el primer valor del iterador.
/*Mezclando funciones generadores y asincronas*/
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let index = 0; index < datos.length; index++) {
            yield yield __await(datos[index]);
        }
    });
}
let datosWebPage = obtenerDatosWeb();
/*En cada un de estos next(), iremos iterando sobre los elementos del JSON y sacaemos de cada posicion la informacion necesaria*/
datosWebPage.next().then(({ value, done }) => {
    console.log(value.Name);
});
datosWebPage.next().then(({ value, done }) => {
    console.log(`${value.Name} - ${value.Description}`);
});
function hola(nombre, apellido, edad) {
    let saludo = `Hola ${nombre}`;
    if (apellido != undefined) {
        saludo = saludo + `${apellido}`;
    }
    if (edad != undefined) {
        saludo = saludo + `${edad}`;
    }
    return saludo;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map