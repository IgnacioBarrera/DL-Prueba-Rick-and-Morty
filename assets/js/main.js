import DetallesPersonajes from "./detallespersonajes.js"
/* MAIN JS */
let pj1 = new DetallesPersonajes("1","rick","vivo","humano","Hombre","2","tierra","chile","1");

const llamadoPersonajes = (() => {
    /* VARIABLES PRIVADAS */
    let urlAPI = "https://rickandmortyapi.com/api/character/";
    let getElement = document.querySelector(".resultados");
    let resultado
    /* FUNCIONES PRIVADAS */
    try {
        /* PRIMERA F. PRIVADA */
        let respuestaAPI = async (url) => {
            let response = await fetch(url);
            resultado = await response.json(); 
        }
        /* SEGUNDA F.PRIVADA */
        let getID = async (id,element) => {
            let dpj1 = new DetallesPersonajes(id,element.name,element.status,element.species,element.gender,element.created,element.origin,element.location,element.episode);
            getElement.innerHTML += dpj1.infoGeneral();
        }
            /* PRIMERA FUNCION PUBLICA */
        return {
            respuestaAPIPUBLIC: async (url) => {
                await respuestaAPI(url);
                resultado.results.forEach(element => {
                    getElement.innerHTML += `
                        <img src="${element.image}">
                    `
                    getID(element.id,element);
                    document.getElementById("cantidadPersonajes").innerHTML =+ `${resultado.results.length}`
                });
            }
        };
    } catch (error) {
        console.log(error);
    }
})();

let urlPUBLICA = "https://rickandmortyapi.com/api/character/"
/* SEGUNDA FUNCION PUBLICA */
setTimeout(() => {
    let spinner = document.getElementsByClassName("spinner-border");
    $(spinner).removeClass("spinner-border");
    llamadoPersonajes.respuestaAPIPUBLIC(urlPUBLICA);
}, 2000);