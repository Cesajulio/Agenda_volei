// A agenda de jogos agora é um array de objetos em JavaScript
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

// Função para renderizar os jogos na página
function renderGames() {
    const listElement = document.getElementById('jogos-do-dia-lista');
    listElement.innerHTML = ''; // Limpa a lista antes de adicionar os jogos

    if (gamesOfTheDay.length === 0) {
        const noGamesMessage = document.createElement('li');
        noGamesMessage.textContent = 'Nenhum jogo na agenda para hoje.';
        listElement.appendChild(noGamesMessage);
    } else {
        gamesOfTheDay.forEach(game => {
            const listItem = document.createElement('li');
            listItem.classList.add('game-item');

            const gameInfo = `
                <div class="game-info">
                    <p class="game-tournament">${game.tournament}</p>
                    <p class="game-modality">${game.modality}</p>
                    <p class="game-teams">
                        ${game.team1} vs ${game.team2}
                    </p>
                    <p class="game-details">
                        Horário: ${game.time} | Transmissão: ${game.channel}
                    </p>
                </div>
            `;
            
            listItem.innerHTML = gameInfo;
            listElement.appendChild(listItem);
        });
    }
}

// Renderiza os jogos quando a página é carregada
document.addEventListener('DOMContentLoaded', renderGames);