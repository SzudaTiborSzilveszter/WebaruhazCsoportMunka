export default class AdminTermek{
    #obj = {};
    #index;

    constructor(obj = {nev, kep, ar, leiras}, index, szuloElem){
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem
        this.megjelenit();
        this.esemenykezelo();
    }

    esemenykezelo() {
        const buttonElem = document.getElementById("Torles"+this.#index);
        console.log(buttonElem);
        buttonElem.addEventListener("click", (event) => {
            console.log("event.target", event.target);
            console.log("this", this);
            this.sajatEsemeny();
        });
    }

    sajatEsemeny() {
        const e = new CustomEvent("torles", { detail: this.#index });
        window.dispatchEvent(e);
    }

    megjelenit(){
        let kod=`<tr>
                <td>${this.#obj.nev}</td>
                <td><img src="${this.#obj.kep}" alt="${this.#obj.nev}"></td>
                <td>${this.#obj.ar}</td>
                <td>${this.#obj.leiras}</td>
                <td><button class="torlesgomb" id="Torles${this.#index}">Törlés</button><button class="szerkesztesgomb">Szerkesztés</button></td>
            </tr>`
            this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}