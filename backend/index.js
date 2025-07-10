const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const animalRoutes = require('./routes/animal');
app.use('/animais', animalRoutes);

const vacinaRoutes = require('./routes/vacina');
app.use('/vacinas', vacinaRoutes);

app.listen(3001, () => {
  console.log('🚀 Servidor backend rodando em http://localhost:3001');
});
