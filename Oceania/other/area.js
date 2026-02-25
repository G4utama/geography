fetch('../../other/country.json')
.then(response => response.json())
.then(data => {
    const oceaniaData = data.filter(country => country.continent === 'Oceania');
    const totalArea = oceaniaData.reduce((acc, country) => acc + country.area, 0);

    const table = `
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Flag</th>
                <th>Country</th>
                <th>Area (km2)</th>
                <th>Percentage</th>
            </tr>
            </thead>
            <tbody>
				<tr>
					<td>0</td>
					<td><a href="../../Oceania.html"><img class="flag" src="../../assets/continent/Oceania.png"></a></td>
					<td>Oceania</td>
					<td>${totalArea.toLocaleString()}</td>
					<td>100%</td>
				</tr>
                <tr>
                    <th colspan="5">Countries</th>
                </tr>
            ${sortTableData(oceaniaData).map((country, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><a href="../../${country.continent}/${country.name}.html"><img class="flag" src="../../assets/country/flag/${country.continent}/${country.name}.png"></a></td>
                    <td>${country.name.replace('_', ' ').replace('_', ' ')}</td>
                    <td>${(country.area).toLocaleString()}</td>
                    <td>${((country.area / totalArea) * 100).toFixed(2)}%</td>
                </tr>
            `).join('')}
            </tbody>
        </table>
    `;
    const areaDiv = document.getElementById('area');
    areaDiv.innerHTML = table;
})
.catch(error => console.error(error));

function sortTableData(data) {
  	return data.sort((a, b) => b.area - a.area);
}
