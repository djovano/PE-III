const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.get('/animais', (req, res) => {
  db.query('SELECT * FROM animal', (err, results) => {
    if (err) {
      res.status(500).json({ erro: err });
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});