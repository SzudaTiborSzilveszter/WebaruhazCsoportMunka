const db = require('../config/db');

class TermekModell {
    static async osszesTermek() {
        const [rows] = await db.execute('SELECT * FROM termekek');
        return rows;
    }

    static async termekById(id) {
        const [rows] = await db.execute('SELECT * FROM termekek WHERE id = ?', [id]);
        return rows[0];
    }
}

module.exports = TermekModell;