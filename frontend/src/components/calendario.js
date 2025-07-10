import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarioVacinas() {
  const [vacinas, setVacinas] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [form, setForm] = useState({ nome_vacina: '', id_animal: '', observacao: '' });

  const carregarVacinas = async () => {
    const res = await fetch('http://localhost:3001/vacinas');
    const data = await res.json();
    setVacinas(data);
  };

  useEffect(() => {
    carregarVacinas();
  }, []);

  const handleData = date => {
    setDataSelecionada(date);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agendarVacina = async e => {
    e.preventDefault();
    await fetch('http://localhost:3001/vacinas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        data_vacina: dataSelecionada.toISOString().split('T')[0]
      })
    });
    carregarVacinas();
    setForm({ nome_vacina: '', id_animal: '', observacao: '' });
  };

  const vacinasDoDia = vacinas.filter(v =>
    new Date(v.data_vacina).toDateString() === dataSelecionada.toDateString()
  );

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <Calendar onChange={handleData} value={dataSelecionada} />
      <h3>Vacinas para {dataSelecionada.toLocaleDateString()}</h3>
      <ul className="lista-vacinas">
        {vacinasDoDia.map(v => (
          <li className="vacina-card">
            <div>
              <span className="vacina-nome"><strong>{v.nome_vacina}</strong></span>{' '}
              <span className="vacina-animal">Animal #{v.id_animal}</span>{' '}
              {v.observacao && (
                <span className="vacina-observacao">{v.observacao}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={agendarVacina}>
        <h3>Agendar nova vacina</h3>
        <input
          type="text"
          name="nome_vacina"
          placeholder="Nome da vacina"
          value={form.nome_vacina}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="id_animal"
          placeholder="ID do animal"
          value={form.id_animal}
          onChange={handleChange}
          required
        />
        <textarea
          name="observacao"
          placeholder="Observação"
          value={form.observacao}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Agendar vacina</button>
      </form>
    </div>
  );
}

export default CalendarioVacinas;
