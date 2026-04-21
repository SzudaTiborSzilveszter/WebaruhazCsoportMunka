import { FEGYVERLISTA } from "./adat.js";
import Termekek from "./Termekek.js";

const szuloELEM = document.querySelector(".kartyak");
const kosarELEM = document.querySelector(".kosar");




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
});