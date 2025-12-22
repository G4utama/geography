fetch('country.json')
.then(response => response.json())
.then(data => {
    const totalArea = data.reduce((acc, country) => acc + country.area, 0);

    const europeData = data.filter(country => country.continent === 'Europe');
    const totalEuropeArea = europeData.reduce((acc, country) => acc + country.area, 0);

    const asiaData = data.filter(country => country.continent === 'Asia');
    const totalAsiaArea = asiaData.reduce((acc, country) => acc + country.area, 0);

    const africaData = data.filter(country => country.continent === 'Africa');
    const totalAfricaArea = africaData.reduce((acc, country) => acc + country.area, 0);

    const oceaniaData = data.filter(country => country.continent === 'Oceania');
    const totalOceaniaArea = oceaniaData.reduce((acc, country) => acc + country.area, 0);

    const northAmericaData = data.filter(country => country.continent === 'North_America');
    const totalNorthAmericaArea = northAmericaData.reduce((acc, country) => acc + country.area, 0);

    const southAmericaData = data.filter(country => country.continent === 'South_America');
    const totalSouthAmericaArea = southAmericaData.reduce((acc, country) => acc + country.area, 0);

    const antarcticaData = data.filter(country => country.continent === 'Antarctica');
    const totalAntarcticaArea = antarcticaData.reduce((acc, country) => acc + country.area, 0);

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
					<td><a href="../index.html"><img class="flag" src="../assets/other/World.png"></a></td>
					<td>World</td>
					<td>${totalArea.toLocaleString()}</td>
					<td>100%</td>
				</tr>
                <tr>
                    <th colspan="5">Continents</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><a href="../Asia.html"><img class="flag" src="../assets/continent/Asia.png"></a></td>
                    <td>Asia</td>
                    <td>${totalAsiaArea.toLocaleString()}</td>
                    <td>${((totalAsiaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr class="grayscale">
                    <td>2</td>
                    <td><a href="../Africa.html"><img class="flag" src="../assets/continent/Africa.png"></a></td>
                    <td>Africa</td>
                    <td>${totalAfricaArea.toLocaleString()}</td>
                    <td>${((totalAfricaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr class="grayscale">
                    <td>3</td>
                    <td><a href="../North_America.html"><img class="flag" src="../assets/continent/North_America.png"></a></td>
                    <td>North America</td>
                    <td>${totalNorthAmericaArea.toLocaleString()}</td>
                    <td>${((totalNorthAmericaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><a href="../South_America.html"><img class="flag" src="../assets/continent/South_America.png"></a></td>
                    <td>South America</td>
                    <td>${totalSouthAmericaArea.toLocaleString()}</td>
                    <td>${((totalSouthAmericaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr class="grayscale">
                    <td>5</td>
                    <td><a href="../Antarctica.html"><img class="flag" src="../assets/continent/Antarctica.png"></a></td>
                    <td>Antarctica</td>
                    <td>${totalAntarcticaArea.toLocaleString()}</td>
                    <td>${((totalAntarcticaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
					<td>6</td>
                    <td><a href="../Europe.html"><img class="flag" src="../assets/continent/Europe.png"></a></td>
                    <td>Europe</td>
                    <td>${totalEuropeArea.toLocaleString()}</td>
                    <td>${((totalEuropeArea / totalArea) * 100).toFixed(2)}%</td>
				</tr>
                <tr class="grayscale">
                    <td>7</td>
                    <td><a href="../Oceania.html"><img class="flag" src="../assets/continent/Oceania.png"></a></td>
                    <td>Oceania</td>
                    <td>${totalOceaniaArea.toLocaleString()}</td>
                    <td>${((totalOceaniaArea / totalArea) * 100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <th colspan="5">Countries</th>
                </tr>
            ${sortTableData(data).map((country, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><a href="../${country.continent}/${country.name}.html"><img class="flag" src="../assets/country/flag/${country.continent}/${country.name}.png"></a></td>
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
