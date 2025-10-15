// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Novara",
      team2: "Chieri",
      time: "14h15",
      channel: "VBTV"
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Cuneo",
      team2: "Scandicci",
      time: "15h30",
      channel: "VBTV"
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "San Giovanni",
      team2: "Conegliano",
      time: "15h30",
      channel: "VBTV"
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Milano",
      team2: "Vallefoglia",
      time: "15h30",
      channel: "VBTV"
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
                        Horário: ${game.time} (horário de Brasília) | Transmissão: ${game.channel}
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
