// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    {
      tournament: "🇹🇷 Supercopa - Final",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Ziraat",
      team2: "Fenerbahçe",
      time: "11h30",
      channel: "TRT Spor",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇹🇷 Liga Sultanlar - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Galatasaray",
      team2: "Ilkbank",
      time: "12h30",
      channel: "TVF Voleybol",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇮🇹 SuperLega - 1ª rodada",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Cisterna",
      team2: "Trentino",
      time: "15h30",
      channel: "VBTV",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇮🇹 SuperLega - 1ª rodada",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Monza",
      team2: "Perugia",
      time: "15h30",
      channel: "VBTV",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇵🇱 PlusLiga - 1ª rodada",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Suwalki",
      team2: "Rzeszów",
      time: "15h30",
      channel: "VBTV",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇹🇷 Copa Turca - 2ª rodada",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Istanbul",
      team2: "Halkbank",
      time: "15h30",
      channel: "TVF Voleybol",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇧🇷 Superliga - 1ª rodada",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Cruzeiro",
      team2: "Juiz de Fora",
      time: "18h30",
      channel: "SporTV 2, VBTV e GETV",
      links: [
          // Adicione links aqui se souber deles
      ]
    },
    {
      tournament: "🇧🇷 Superliga - 1ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Minas",
      team2: "Mackenzie",
      time: "21h00",
      channel: "SporTV 2 e VBTV",
      links: [
          // Adicione links aqui se souber deles
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
