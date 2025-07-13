# Sistema de Vacinação de Animais

Este é um sistema para cadastro de animais e agendamento de vacinas.

O projeto é dividido em duas partes:

- Frontend em React
- Backend em Node.js com Express e MySQL

---

## Funcionalidades

- Cadastro de animais com nome, idade, espécie e peso
- Agendamento de vacinas para animais com data e observação
- Visualização de vacinas por data em um calendário
- Interface com barra lateral para alternar entre telas

---

## Estrutura de Pastas

meu-projeto/
├── backend/
│ ├── index.js
│ ├── routes/
│ └── db/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
└── README.md

yaml
Copiar
Editar

---

## Como executar o projeto

### Requisitos

- Node.js
- MySQL
- npm ou yarn

---

### Backend (Node.js + Express)

1. Acesse a pasta do backend:

cd backend

csharp
Copiar
Editar

2. Instale as dependências:

npm install

bash
Copiar
Editar

3. Configure o banco de dados em um arquivo `.env` com o seguinte conteúdo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=sistema_vacinas
PORT=3001

markdown
Copiar
Editar

4. Inicie o servidor:

npx nodemon index.js

yaml
Copiar
Editar

---

### Frontend (React)

1. Acesse a pasta do frontend:

cd frontend

csharp
Copiar
Editar

2. Instale as dependências:

npm install

css
Copiar
Editar

3. Inicie a aplicação:

npm start

sql
Copiar
Editar

---

## Banco de Dados

Crie o banco e as tabelas com os comandos SQL abaixo:

```sql
CREATE DATABASE sistema_vacinas;

USE sistema_vacinas;

CREATE TABLE Animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  especie INT,
  peso FLOAT
);

CREATE TABLE Vacina (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_vacina VARCHAR(100),
  id_animal INT,
  observacao TEXT,
  data DATE,
  FOREIGN KEY (id_animal) REFERENCES Animal(id)
);