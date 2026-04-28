import Termekek from "./Termekek.js";

const API_URL = "http://localhost:3000/api/termekek";
const szuloELEM = document.querySelector(".kartyak");
const kosarELEM = document.querySelector("#kosar");
const kosarSzamELEM = document.querySelector("#kosarSzam");

const KOSARBAN = []; 

if (kosarELEM) kosarELEM.innerHTML = "🛒";
if (kosarSzamELEM) kosarSzamELEM.innerHTML = "0";

async function fegyverekBetoltese() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Hiba a letöltés során");
        
        const fegyverek = await response.json();

        new Termekek(fegyverek, szuloELEM);

    } catch (error) {
        console.error("Hiba történt:", error);
        if (szuloELEM) szuloELEM.innerHTML = "Sajnos nem sikerült betölteni a fegyvereket.";
    }
}

window.addEventListener("kosarba", function (event) {
    KOSARBAN.push(event.detail);
    if (kosarSzamELEM) {
        kosarSzamELEM.innerHTML = String(KOSARBAN.length);
    }
});

if (kosarELEM) {
    kosarELEM.addEventListener("click", function () {
        const nevek = KOSARBAN.map(termek => termek.nev || termek);
        const q = encodeURIComponent(nevek.join(","));
        window.location.href = `kosar.html?items=${q}`;
    });
}

fegyverekBetoltese();