document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '';
    const season = '2023';
    const competitionId = 'CL';

    const endpoint = `https://api.football-data.org/v2/competitions/${competitionId}/standings?season=${season}`;

    fetch(endpoint, {
        headers: {
            'X-Auth-Token': apiKey,
        },
    })
    .then(response => response.json())
    .then(data => {
        const standings = data.standings[0].table;
        const tableBody = document.getElementById('table-body');

        standings.forEach(team => {
            const row = document.createElement('tr');
            Object.values(team.team).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
