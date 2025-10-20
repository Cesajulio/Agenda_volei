// A agenda de jogos agora é um array de objetos em JavaScript
const gamesOfTheDay = [
    // Copa Turca Masculina - Jogo 1
   
    // Série A1 Masculina (Itália) - Jogo 1
    {
      tournament: "Série A1 (Itália) - Masculina",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Milano",
      team2: "Modena",
      time: "15h",
      channel: "VBTV",
      links: []
    },
    // Série A1 Masculina (Itália) - Jogo 2
    {
      tournament: "Série A1 (Itália) - Masculina",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Civitanova",
      team2: "Grottazzolina",
      time: "15h30",
      channel: "VBTV",
      links: []
    },
    // Série A1 Masculina (Itália) - Jogo 3
    {
      tournament: "Série A1 (Itália) - Masculina",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Padova",
      team2: "Cuneo",
      time: "15h30",
      channel: "VBTV",
      links: []
    },
    // Série A1 Masculina (Itália) - Jogo 4
    {
      tournament: "Série A1 (Itália) - Masculina",
      modality: "Vôlei de Quadra (Masculino)",
      team1: "Verona",
      team2: "Piacenza",
      time: "15h30",
      channel: "VBTV",
      links: []
    },
    // Superliga Feminina (Brasil) - Jogo 1
    {
      tournament: "Superliga Feminina",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Fluminense",
      team2: "Maringá",
      time: "18h30",
      channel: "VBTV",
      links: []
    },
    // Superliga Feminina (Brasil) - Jogo 2
    {
      tournament: "Superliga Feminina",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Sesc-Flamengo",
      team2: "Barueri",
      time: "18h30",
      channel: "SporTV2 e GE TV",
      links: []
    },
    // Superliga Feminina (Brasil) - Jogo 3
    {
      tournament: "Superliga Feminina",
      modality: "Vôlei de Quadra (Feminino)",
      team1: "Praia Clube",
      team2: "Brasília",
      time: "21h",
      channel: "SporTV2 e VBTV",
      links: []
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
