const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM vacinas', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

router.get('/animal/:id', (req, res) => {
  db.query('SELECT * FROM vacinas WHERE id_animal = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { id_animal, nome_vacina, data_vacina, observacao } = req.body;
  db.query(
    'INSERT INTO vacinas (id_animal, nome_vacina, data_vacina, observacao) VALUES (?, ?, ?, ?)',
    [id_animal, nome_vacina, data_vacina, observacao],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
});

module.exports = router;
