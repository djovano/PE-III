const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM animal', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM animal WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    if (results.length === 0) return res.status(404).json({ mensagem: 'Animal não encontrado' });
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { nome, idade, especie, peso } = req.body;
  if (!nome || idade == null || especie == null || peso == null) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  db.query(
    'INSERT INTO animal (nome, idade, especie, peso) VALUES (?, ?, ?, ?)',
    [nome, idade, especie, peso],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ id: result.insertId, nome, idade, especie, peso });
    }
  );
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { nome, idade, especie, peso } = req.body;

  db.query(
    'UPDATE animal SET nome = ?, idade = ?, especie = ?, peso = ? WHERE id = ?',
    [nome, idade, especie, peso, id],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.json({ id, nome, idade, especie, peso });
    }
  );
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM animal WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: `Animal ${id} deletado com sucesso` });
  });
});

module.exports = router;
