import React, { useEffect, useState } from 'react';

function AnimalList({ onEdit }) {
  const [animais, setAnimais] = useState([]);

  const carregar = async () => {
    const res = await fetch('http://localhost:3001/animais');
    const data = await res.json();
    setAnimais(data);
  };

  useEffect(() => {
    carregar();
  }, []);

  const deletar = async id => {
    await fetch(`http://localhost:3001/animais/${id}`, {
      method: 'DELETE'
    });
    carregar();
  };

  return (
    <div>
      <h2>Lista de Animais</h2>
      <ul>
        {animais.map(animal => (
          <li key={animal.id}>
            <strong>{animal.nome}</strong> | ID: {animal.id} | Idade: {animal.idade} | Espécie: {animal.especie} | Peso: {animal.peso}kg
            <button onClick={() => onEdit(animal)}>Editar</button>
            <button onClick={() => deletar(animal.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
