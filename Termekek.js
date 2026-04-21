import Termek from "./Termek.js";

export default class Termekek{
    #lista=[];
    #index=0;
    constructor(lista, szuloElem){
        this.#lista=lista;
        this.szuloElem=szuloElem;
        this.szuloElem.innerHTML="";
        this.megjelenit();
    }
    megjelenit(){
        this.#lista.forEach((elem,index)=>{
            new Termek(elem,index,this.szuloElem);
        })
        this.sajatEsemeny();
    }

    sajatEsemeny() {
    console.log("sajatEsemeny");
    const e = new CustomEvent("kosarba", { detail: this.#index });
    window.dispatchEvent(e);
    }
}