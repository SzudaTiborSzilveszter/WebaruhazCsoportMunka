import AdminTermek from "./AdminTermek.js";

export default class AdminTabla{
    #lista;
    constructor(lista,szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML="";
        this.megjelenit();
    }
    
    megjelenit(){
        this.#lista.forEach((elem, index) => {
            new AdminTermek(elem, index, this.szuloElem);
        });
    }
}