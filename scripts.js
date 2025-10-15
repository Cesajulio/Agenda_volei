// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Novara",
      team2: "Chieri",
      time: "14h15",
      channel: "VBTV",
      links: [
          "https://m.vkvideo.ru/video-152308117_456251273?from=video",
          "https://pt.sportplus.tv/volleyball/327487/7199355/"
      ]
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Cuneo",
      team2: "Scandicci",
      time: "15h30",
      channel: "VBTV",
      links: [
          "https://m.vkvideo.ru/video-152308117_456251274?from=video",
          "https://pt.sportplus.tv/volleyball/327487/7199236/"
      ]
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "San Giovanni",
      team2: "Conegliano",
      time: "15h30",
      channel: "VBTV",
      links: [
          "https://m.vkvideo.ru/video-152308117_456251275?from=video",
          "https://pt.sportplus.tv/volleyball/327487/7199451/"
      ]
    },
    {
      tournament: "Lega Femminile - 3ª rodada",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Milano",
      team2: "Vallefoglia",
      time: "15h30",
      channel: "VBTV",
      links: [
          "https://pt.sportplus.tv/volleyball/327487/7199246/",
          "https://www.facebook.com/share/1D6r62CSxn/?mibextid=wwXIfr"
      ]
    },
    {
        tournament:"Lega Femminile - 3ª rodada",
        modality:"Vôlei de Quadra (Feminino)",
        team1:"Busto Arsizio",
        team2:"Bergamo",
        time:"15:30",
        channel:"VBTV",
        links: [
            "https://pt.sportplus.tv/volleyball/327487/7199235/",
            "https://www.facebook.com/share/1D6r62CSxn/?mibextid=wwXIfr"
        ]
    },
    {
        tournament:"Lega Femminile - 3ª rodada",
        modality:"Vôlei de Quadra (Feminino)",
        team1:"Perugia",
        team2:"Monviso",
        time:"15:30",
        channel:"VBTV",
        links: [
            "https://rileygainescenter.org/truc-tiep/nu-perugia-vs-nu-pinerolo-luc-0130-ngay-16-10-2025/",
            "https://pt.sportplus.tv/volleyball/327487/7199266/"
        ]
    },
    {
        tournament:"Lega Femminile - 3ª rodada",
        modality:"Vôlei de Quadra (Feminino)",
        team1:"Firenze",
        team2:"Macerata",
        time:"15:00",
        channel:"VBTV",
        links: [
            "https://pt.sportplus.tv/volleyball/327487/7199234/",
            "https://www.facebook.com/share/1D6r62CSxn/?mibextid=wwXIfr"
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
