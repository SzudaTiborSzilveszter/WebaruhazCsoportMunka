import { FEGYVERLISTA } from "./adat.js";
import Termekek from "./Termekek.js";

const szuloELEM = document.querySelector(".kartyak");
const kosarELEM = document.querySelector("#kosar");
const kosarSzamELEM = document.querySelector("#kosarSzam");

<<<<<<< HEAD
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
=======



new Termekek(FEGYVERLISTA,szuloELEM);
const KOSARBAN=[];
window.addEventListener("kosarba",function(event){
    console.log(event.detail);
    KOSARBAN.push(FEGYVERLISTA[event.detail]);
    new Termekek(KOSARBAN,kosarELEM);
    console.log(KOSARBAN);
});

window.addEventListener("ujTermekHozzaadva", function (event) {
    console.log("Új termék hozzáadva az index-en:", event.detail);
    new Termekek(FEGYVERLISTA, szuloELEM);
>>>>>>> a4a86e6e06eacb1eecc565f8da09e8f4318795a2
});