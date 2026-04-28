// Ide fogunk kéréseket küldeni
const BASE_URL = "http://localhost:3000/api/termekek";

// Adatok lekérése (GET kérés)
export async function getTermekek() {
    try {
        const valasz = await fetch(BASE_URL);
        const adatok = await valasz.json();
        return adatok;
    } catch (hiba) {
        console.error("Hiba az adatok lekérésekor:", hiba);
        return [];
    }
}


export async function addTermek(ujTermekObjektum) {
    try {
        const valasz = await fetch(BASE_URL, {
            method: "POST",// Jelezzük, hogy új adatot küldünk
            headers: {
                "Content-Type": "application/json" // Megmondjuk, hogy JSON-t küldünk
            },
            body: JSON.stringify(ujTermekObjektum) // A JS objektumot JSON szöveggé alakítjuk
        });
        return await valasz.json();
    } catch (hiba) {
        console.error("Hiba a mentéskor:", hiba);
    }
}