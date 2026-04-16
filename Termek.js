export default class Termek {
    #obj = {};
    #index=0;
    constructor(obj={nev, kep, ar, leiras}, index, szuloElem){
        this.#obj=obj;
        this.szuloElem=szuloElem;
        this.#index=index;
        this.megjelenit();
        this.esemenykezelo();
    }

        esemenykezelo() {
        const buttonElem = document.querySelector(".kartya:last-child button");
        console.log(this.buttonElem);
        buttonElem.addEventListener("click", (event)=> {
        console.log("event.target",event.target);
        console.log("this",this);
        this.sajatEsemeny();
        });
    }

    sajatEsemeny() {
    console.log("sajatEsemeny");
    const e = new CustomEvent("kosarba", { detail: this.#index });
    window.dispatchEvent(e);
    }

    megjelenit(){
        let kod = `
            <div class="kartya">
                <h4>${this.#obj.nev}</h4>
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}"> 
                <p>Ár: ${this.#obj.ar}</p>
                <p>Leírás: ${this.#obj.leiras}</p>
                <button>Kosárba</button>
            </div>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}