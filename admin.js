import { FEGYVERLISTA } from "./adat.js"
import AdminTabla from "./AdminTabla.js"

const szuloELEM = document.querySelector(".admintabla")

new AdminTabla(FEGYVERLISTA,szuloELEM);

window.addEventListener("torles", function (event) {
    console.log(event.detail);
    FEGYVERLISTA.splice(event.detail,1)
    new AdminTabla(FEGYVERLISTA,szuloELEM);
});

window.addEventListener("ujTermekHozzaadva", function (event) {
    console.log("Új termék hozzáadva:", event.detail);
    new AdminTabla(FEGYVERLISTA,szuloELEM);
});