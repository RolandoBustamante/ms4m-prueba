const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PUERTO = 5001;
app.use(cors());
app.get('/api/data/act', (req, res) => {
    fs.readFile('productionact.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/data/prev', (req, res) => {
    fs.readFile('productionprev.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PUERTO, () => {
    console.log(`Server running on http://localhost:${PUERTO}`);
});
