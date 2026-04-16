export default class Termek {
    #obj = {};
    #index=0;
    constructor(obj={nev, kep, ar, leiras}, index, szuloElem){
        this.#obj=obj;
        this.szuloElem=szuloElem;
        this.#index=index;
        this.megjelenit();
    }

    megjelenit(){
        let kod = `
            <div class="kiskartya">
                <h4>${this.#obj.nev}</h4>
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}"> 
                <p>Ár: ${this.#obj.ar}</p>
                <p>Leírás: ${this.#obj.leiras}</p>
            </div>
        `
    }
}