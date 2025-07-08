import React, { useState } from 'react';
import AnimalForm from './components/animalForm';
import AnimalList from './components/animalList';
import './App.css';

function App() {
  const [animalEditando, setAnimalEditando] = useState(null);
  const [atualizar, setAtualizar] = useState(false);

  const atualizarLista = () => {
    setAtualizar(!atualizar);
    setAnimalEditando(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Animais</h1>
      <AnimalForm onSuccess={atualizarLista} animalEditando={animalEditando} />
      <hr />
      <AnimalList key={atualizar} onEdit={setAnimalEditando} />
    </div>
  );
}

export default App;
