export default class AdminTermek{
    #obj = {};
    #index;

    constructor(obj = {nev, kep, ar, leiras}, index, szuloElem){
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem
        this.megjelenit();
    }

    megjelenit(){
        let kod=`<tr>
                <td>${this.#obj.nev}</td>
                <td>${this.#obj.kep}</td>
                <td>${this.#obj.ar}</td>
                <td>${this.#obj.leiras}</td>
                <td><button>Törlés</button><button>Szerkesztés</button></td>
            </tr>`
    }
}