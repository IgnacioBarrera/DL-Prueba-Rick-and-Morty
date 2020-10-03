import Personajes from "./personajes.js"
/* DETALLESPERSONAJES.JS */
export default class DetallesPersonajes extends Personajes {
    constructor(id,name,status,species,gender,created,origin,location,episode){
        super(id);
        this._name = name;
        this._status = status;
        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
    }
    get name(){
        return this._name;
    }
    set name(id){
        this._name = id;
    }
    get status(){
        return this._status;
    }
    set status(id){
        this._status = id;
    }
    infoGeneral(){
        return `
        <ul style="padding-top: 1em;width: 10em;">
            <li><p>Nombre: ${this.name}</p></li>
            <li><p>ID: ${this.id}</p></li>
            <li><p>Especie: ${this.species}</p></li>
        </ul>
        `;
    }
    infoModal(){
        return `
        <ul>
            <li>ID:${this.id}</ID:></li>
            <li><Nombre:>${this.name}</Nombre:></li>
            <li><Especie:>${this.species}</Especie:></li>
        </ul>
        `;
    }
}