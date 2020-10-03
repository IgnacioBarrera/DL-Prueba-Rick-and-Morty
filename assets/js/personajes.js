/* PERSONAJES.JS  */
export default class Personajes {
    constructor(id) {
        this._id = id;
    }
    get id(){
        return this._id
    }
    set id(idNueva){
        this._id = idNueva;
    }
}