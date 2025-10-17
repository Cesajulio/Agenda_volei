// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    {
      tournament: "🇵🇱 Liga Siatkowki - Segunda rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "ŁKS Łódź",
      team2: "Bydgoszcz",
      time: "12h30",
      channel: "VBTV",
      links: [
          "https://en84.sportplus.live/volleyball/2136350/7205094/"
      ]
    },
    {
      tournament: "🇧🇷 Paulista - Final",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Campinas",
      team2: "Suzano",
      time: "20h30",
      channel: "SporTV 2",
      links: [
          "https://ge.globo.com/sportv/video/sportv-2-ao-vivo-no-geglobo-fifa-monitoracao-7690141.ghtml"
          
      ]
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

            // Constrói a string de links
            let linksHtml = '';
            if (game.links && game.links.length > 0) {
                linksHtml = '<p class="game-links-title">Links:</p><ul>';
                game.links.forEach((link, index) => {
                    // Crie um nome para cada link, ou use o URL como texto
                    const linkName = `Opção ${index + 1}`;
                    linksHtml += `<li><a href="${link}" target="_blank">${linkName}</a></li>`;
                });
                linksHtml += '</ul>';
            }

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
                    <div class="game-links-container">
                        ${linksHtml}
                    </div>
                </div>
            `;
            
            listItem.innerHTML = gameInfo;
            listElement.appendChild(listItem);
        });
    }
}

// Renderiza os jogos quando a página é carregada
document.addEventListener('DOMContentLoaded', renderGames);
