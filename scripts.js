// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    // Vôlei de Quadra (Feminino) - Supercopa BR
    {
      tournament: "Supercopa - Final",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Osasco",
      team2: "Bauru",
      time: "21h30",
      channel: "SporTV 2 e GE TV",
      links: [
         " https://www.youtube.com/live/iMD1riuE9g0?si=GKmv0ofo7r0B1q7q"
      ]
    },
    // Vôlei de Quadra (Feminino) - Supercopa IT
    {
      tournament: "Supercopa (Itália) - Final",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Conegliano",
      team2: "Milano",
      time: "12h30",
      channel: "VBTV",
      links: [
          "Https://e.cakeo3.online/truc-tiep/conegliano-w-vs-milano-w.guj6wpZ.9fgeq6t"
      ]
    },
    // Vôlei de Quadra (Feminino) - Superliga RU - Jogo 1
    {
      tournament: "Superliga (Rússia) - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Yenisey",
      team2: "Lokomotiv",
      time: "9h",
      channel: "VolleyRU",
      links: [
          "https://volley.ru/"
      ]
    },
    // Vôlei de Quadra (Feminino) - Superliga RU - Jogo 2
    {
      tournament: "Superliga (Rússia) - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Moscow",
      team2: "Tulitsa",
      time: "11h",
      channel: "VolleyRU",
      links: [
          "https://volley.ru/"
      ]
    },
    // Vôlei de Quadra (Feminino) - Liga Sultanlar TR - Jogo 1
    {
      tournament: "Liga Sultanlar (Turquia) - 2ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Ilbank",
      team2: "Eczacibasi",
      time: "9h",
      channel: "TRT Spor",
      links: [
          "https://en84.sportplus.live/volleyball/24267/7209331/"
      ]
        
    },
    // Vôlei de Quadra (Feminino) - Liga Sultanlar TR - Jogo 2
    {
      tournament: "Liga Sultanlar (Turquia) - 2ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "VakifBank",
      team2: "Besiktas",
      time: "11h",
      channel: "TRT Spor",
      links: [
         "https://en84.sportplus.live/volleyball/24267/7209531/"
      ]
    },
    // Vôlei de Quadra (Feminino) - Liga Sultanlar TR - Jogo 3
    {
      tournament: "Liga Sultanlar (Turquia) - 2ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "KuzeyBoru",
      team2: "Galatasaray",
      time: "12h",
      channel: "TVF Voleybol",
      links: [
          "https://en84.sportplus.live/volleyball/24267/7209332/"
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
