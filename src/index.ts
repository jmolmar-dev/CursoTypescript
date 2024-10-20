/*Caso Practico 1.2 Typescript Solucionado*/

/*Declaramos el tipo perro, y mediante la funcion asincrona obtenemos tus datos, que posteriormente son asignados a un elemento img
e insertado dentro del body. De esta forma, cada vez que recarguemos la pagina, obtendremos una imagen de perro aleatoria*/

type Perro = {
    message:string,
    status:string
}


/*Funcion asincrona que se conecta a una API para traese una imagen de perro aleatoria*/
async function getDataDog() : Promise <Perro> {
    let peticion = await fetch (" https://dog.ceo/api/breeds/image/random");
    /*Los datos que obtenemos de la peticion de arriba deberan ser parseados a JSON, ya sea una coleccion o no*/
    let datos = await peticion.json() as Promise <Perro>;
    return datos;

}


/*Llamamos a la funcion asincrona para poder obtener los datos de un perro y convertilos en una imagen posteriormente*/
let fAsincrona = getDataDog();
fAsincrona.then ((perro:Perro) => {
    console.log(perro.message);
    /*Se ha creado un nuevo elemento img donde asociaremos el atributo message de perro, que nos contiene la url de la imagen*/
    let imagenPerro = document.createElement("img") as HTMLImageElement;
    imagenPerro.src = perro.message;
    /*Implementaremos un evento para poder generar otra nueva imagen cuando se haga click en la que tengamos*/
    imagenPerro.addEventListener ("click", async() => {
        /*Se creara una nueva instancia de perro, que se agregara a la propiedad src anterior*/
        let nuevoPerro = await getDataDog();
        imagenPerro.src = nuevoPerro.message;
    });
    /*La imagen se incluye dentro del body*/
    let body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    body.appendChild (imagenPerro);



})


/*Comenzaremos con la funcionalidad de los botones con respecto a la lista*/

let listaOL = document.getElementById("lista-contenidos") as HTMLOListElement;
let btnAdd = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
let btnDelete = document.getElementById("btn-remove-content") as HTMLButtonElement;
let divMensajeError = document.getElementById("errores") as HTMLDivElement;
let body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
let input = document.getElementById("input-contenido") as HTMLInputElement;  

/**
 * Boton de incluir elementos dentro de la lista junto a una estrella, comprobando que el valor del input no este vacio, en caso de que pase
 * se informara al usuario mediante un mensaje
 */
btnAdd.addEventListener("click", (evento:Event) => {
      
    /*En caso de que el texto que obtenemos del input no sea nulo*/
        if (input.value.trim() != ""){
            /*Creamos el elemento estrella y se le incluyan las clases del HTML: al tener un espacio, lo tendremos que agregar por separado*/
            let elementoStar = document.createElement("i");
            elementoStar.classList.add("bi");
            elementoStar.classList.add("bi-star");
            elementoStar.setAttribute ("name","star-li");
            /*A continuacion, crearemos un elemento LI, donde agruparemos la estrella y el valor del input*/
            let elementoLI = document.createElement("li");
            let elementoTexto = document.createTextNode(input.value);
            elementoLI.appendChild(elementoStar);
            elementoLI.appendChild(elementoTexto);
            /*Finalmente agregamos el LI dentro del OL*/
            listaOL.appendChild(elementoLI);
        }else{
            /*En caso contratio obtenemos el parrafo de errores, lo modificamos como deseamos y lo incluimos dentro del div correspondiente*/
            let parrafoError = document.getElementById("p-errores") as HTMLParagraphElement;
            parrafoError.textContent = "Lo sentimos, pero no ha introducido nada";
            parrafoError.style.color = "red";
            divMensajeError.appendChild(parrafoError);
        }
});

/**
 * Boton que nos permitira eliminar el ultimo elemento de la lista
 */

btnDelete.addEventListener("click", (evento:Event) => {
        if (listaOL.lastElementChild){
            listaOL.removeChild(listaOL.lastElementChild);
        }else{
            let mensajeInfo = document.getElementById("p-errores") as HTMLParagraphElement;
            mensajeInfo.textContent = "Lo sentimos, pero no hay elementos que eliminar";
            mensajeInfo.style.color = "red";
            divMensajeError.appendChild(mensajeInfo);    
        }
});

/*A continuacion, implementaremos las animaciones de las estrellas, al pasar por lo alto tendran que rellenarse, cuando nos quitemos quedarse vacias,
y al hacer click tendran que volver a rellenarse*/

let listaStar = document.getElementsByName("star-li") as NodeListOf<HTMLElement>;

/*Iteramos sobre la lista para poder agregar funcionalidades en los elementos*/
listaStar.forEach(elemento => {
    
    elemento.addEventListener("mouseover", (evento:Event) => {
        elemento.classList.remove("bi-star");
        elemento.classList.add("bi-star-fill");
    });

    elemento.addEventListener("mouseout", (evento:Event) => {
        /*Nos aseguramos que la funcion solo se realice cuando la estrella esta vacia*/
        if (!elemento.classList.contains ("clicked")){
            elemento.classList.remove("bi-star-fill");
            elemento.classList.add("bi-star");
        }
        
    });

   elemento.addEventListener("click", (evento:Event) => {
        
        /*Si la estrella esta rellena, se vaciara*/
        if (elemento.classList.contains("clicked")){
            elemento.classList.remove("clicked");
            elemento.classList.remove("bi-star-fill");
            elemento.classList.add("bi-star")
        }else{
            /*En caso contrario la marcaremos como rellena, y se rellenara posteriormente*/
            elemento.classList.add("clicked");
            elemento.classList.remove("bi-start");
            elemento.classList.add("bi-start-fill");
        }     
   });

});