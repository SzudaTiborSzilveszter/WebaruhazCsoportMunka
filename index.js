import { FEGYVERLISTA } from "./adat.js";
import Termekek from "./Termekek.js";

const szuloELEM = document.querySelector(".kartyak");
const kosarELEM = document.querySelector("#kosar");
const kosarSzamELEM = document.querySelector("#kosarSzam");

const KOSARBAN = []; 
kosarELEM.innerHTML = "🛒";
kosarSzamELEM.innerHTML = "0";

new Termekek(FEGYVERLISTA, szuloELEM);

window.addEventListener("kosarba", function (event) {
    KOSARBAN.push(event.detail);
    kosarSzamELEM.innerHTML = String(KOSARBAN.length);
});

kosarELEM.addEventListener("click", function () {
    const q = encodeURIComponent(KOSARBAN.join(","));
    window.location.href = `kosar.html?items=${q}`;
});