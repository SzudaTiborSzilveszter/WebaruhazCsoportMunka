
import { FEGYVERLISTA } from "./adat.js";

const container = document.getElementById("kosarTartalom");

const params = new URLSearchParams(window.location.search);
const itemsParam = params.get("items") || "";
const raw = itemsParam ? itemsParam.split(",").map(s => Number(s)).filter(n => !isNaN(n)) : [];

const counts = new Map();
raw.forEach(i => counts.set(i, (counts.get(i) || 0) + 1));

if (counts.size === 0) {
    container.innerHTML = "<p>A kosár üres.</p>";
} else {
    container.innerHTML = "";
    let total = 0;
    counts.forEach((qty, idx) => {
        const prod = FEGYVERLISTA[idx];
        if (!prod) return;
        total += (prod.ar || 0) * qty;
        const card = document.createElement("div");
        card.className = "kartya";
        card.innerHTML = `
            <h4>${prod.nev}</h4>
            <img src="${prod.kep}" alt="${prod.nev}">
            <p>Ár: ${prod.ar} Ft</p>
            <p>Mennyiség: <strong>${qty}</strong></p>
            <p>Leírás: ${prod.leiras || ""}</p>
        `;
        container.appendChild(card);
    });
    const totalElem = document.createElement("p");
    totalElem.style.fontWeight = "700";
    totalElem.textContent = "Összesen: " + total + " Ft";
    container.appendChild(totalElem);
}