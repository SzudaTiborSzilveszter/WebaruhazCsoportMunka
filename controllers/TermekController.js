const TermekModell = require('../models/TermekModell');

const getTermekek = async (req, res) => {
    try {
        const termekek = await TermekModell.osszesTermek();
        res.status(200).json(termekek);
    } catch (error) {
        res.status(500).json({ uzenet: "Hiba az adatok lekérésekor", hiba: error.message });
    }
};

const getTermek = async (req, res) => {
    try {
        const termek = await TermekModell.termekById(req.params.id);
        if (!termek) return res.status(404).json({ uzenet: "Nincs ilyen termék" });
        res.status(200).json(termek);
    } catch (error) {
        res.status(500).json({ uzenet: "Hiba történt", hiba: error.message });
    }
};

module.exports = { getTermekek, getTermek };