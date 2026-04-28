import { addTermek } from "./adat.js";

const form = document.querySelector("#hozzaadForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const ujFegyver = new FormData(form);
    const ertekek = Object.fromEntries(ujFegyver.entries());
    
    const ujTermek = {
        nev: ertekek.nev,
        kep: ertekek.kep,
        ar: parseInt(ertekek.ar),
        leiras: ertekek.leiras
    };
    
    await addTermek(ujTermek);
    
    alert("Termék sikeresen hozzáadva az adatbázishoz!");
    form.reset();
});