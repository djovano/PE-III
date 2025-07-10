import React, { useState, useEffect } from 'react';

function AnimalForm({ onSuccess, animalEditando }) {
  const [form, setForm] = useState({ nome: '', idade: '', especie: '', peso: '' });

  useEffect(() => {
    if (animalEditando) {
      setForm(animalEditando);
    } else {
      setForm({ nome: '', idade: '', especie: '', peso: '' });
    }
  }, [animalEditando]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const url = animalEditando
      ? `http://localhost:3001/animais/${animalEditando.id}`
      : `http://localhost:3001/animais`;

    const method = animalEditando ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    onSuccess();
    setForm({ nome: '', idade: '', especie: '', peso: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="idade" value={form.idade} onChange={handleChange} placeholder="Idade" type="number" required />
      <input name="especie" value={form.especie} onChange={handleChange} placeholder="Espécie" required />
      <input name="peso" value={form.peso} onChange={handleChange} placeholder="Peso" type="number" step="0.01" required />
      <button type="submit">{animalEditando ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

export default AnimalForm;
