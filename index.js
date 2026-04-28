import { getTermekek } from "./adat.js";
import Termekek from "./Termekek.js";

const szuloELEM = document.querySelector(".kartyak");
const kosarELEM = document.querySelector("#kosar");
let frontendLista = [];
const KOSARBAN = [];

async function init() {
    frontendLista = await getTermekek(); 
    // Ha megjött, kirajzoljuk
    new Termekek(frontendLista, szuloELEM);
}

// Oldal betöltésekor indítjuk
init();

window.addEventListener("kosarba", function(event){
    console.log("Kosárba gomb megnyomva, index:", event.detail);
    KOSARBAN.push(frontendLista[event.detail]);
    console.log("Kosár tartalma:", KOSARBAN);
    // Ide majd kell egy kosár megjelenítő logika, de az adat már benne van a tömbben!
});