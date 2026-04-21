import { FEGYVERLISTA } from "./adat.js";

const form = document.querySelector("#hozzaadForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const ujFegyver = new FormData(form);
    const ertekek = Object.fromEntries(ujFegyver.entries());
    
    const ujTermek = {
        nev: ertekek.nev,
        kep: ertekek.kep,
        ar: ertekek.ar + " Digit",
        leiras: ertekek.leiras
    };
    
    FEGYVERLISTA.push(ujTermek);
    window.dispatchEvent(new CustomEvent("ujTermekHozzaadva", { detail: ujTermek }));
    
    console.log("Új termék:", ujTermek);
    console.log("FEGYVERLISTA:", FEGYVERLISTA);
});
