import React from 'react';
import './App.css';

// Mova a agenda dos jogos para dentro do seu App.js
const gamesOfTheDay = [
  {
    tournament: "Liga Siatkowki - 1ª rodada",
    modality: "Vôlei de Quadra (Feminino)",
    team1: "Bielsko-Biala",
    team2: "Rzeszów",
    time: "12h30",
    channel: "VBTV"
  },
  {
    tournament: "Superliga - 2ª rodada",
    modality: "Vôlei de Quadra (Feminino)",
    team1: "Moscow",
    team2: "Krasnodar",
    time: "13h",
    channel: "VolleyRU"
  },
  {
    tournament: "Paulista - Final",
    modality: "Vôlei de Quadra (Masculino)",
    team1: "Suzano",
    team2: "Campinas",
    time: "20h30",
    channel: "SporTV 2"
  }
];

function App() {
  // Agora, os dados são pegos diretamente da constante gamesOfTheDay
  // Não precisamos de useState, useEffect ou fetch para isso.
  const games = gamesOfTheDay;

  return (
    <div className="App">
      <header>
        <ul className="menu principal">
          <li className="active"><a href="#jogos_de_hoje">Jogos de Hoje</a></li>
        </ul>
      </header>

      <main>
        <div className="container">
          <h1>Jogos do Dia</h1>
          <ul id="jogos-do-dia-lista">
            {games.length > 0 ? (
              games.map((game, index) => (
                <li key={index} className="game-item">
                  <div className="game-info">
                    <p className="game-tournament">{game.tournament}</p>
                    <p className="game-modality">{game.modality}</p>
                    <p className="game-teams">
                      {game.team1} vs {game.team2}
                    </p>
                    <p className="game-details">
                      Horário: {game.time} | Transmissão: {game.channel}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <li>Nenhum jogo na agenda para hoje.</li>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;