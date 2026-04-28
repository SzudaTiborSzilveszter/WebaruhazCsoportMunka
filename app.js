const express = require('express');
const cors = require('cors');
const termekRoutes = require('./routes/termekRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/termekek', termekRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});