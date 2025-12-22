fetch('country.json')
.then(response => response.json())
.then(data => {
	const totalDensity = data.reduce((acc, country) => acc + (country.population / country.area), 0);

	const asiaData = data.filter(country => country.continent === 'Asia');
	const totalAsiaDensity = asiaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const africaData = data.filter(country => country.continent === 'Africa');
	const totalAfricaDensity = africaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const europeData = data.filter(country => country.continent === 'Europe');
	const totalEuropeDensity = europeData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const northAmericaData = data.filter(country => country.continent === 'North_America');
	const totalNorthAmericaDensity = northAmericaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const southAmericaData = data.filter(country => country.continent === 'South_America');
	const totalSouthAmericaDensity = southAmericaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const oceaniaData = data.filter(country => country.continent === 'Oceania');
	const totalOceaniaDensity = oceaniaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const antarcticaData = data.filter(country => country.continent === 'Antarctica');
	const totalAntarcticaDensity = antarcticaData.reduce((acc, country) => acc + (country.population / country.area), 0);

	const table = `
		<table>
			<thead>
			<tr>
				<th>#</th>
				<th>Flag</th>
				<th>Country</th>
				<th>Density (/km2)</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					<td><a href="../index.html"><img class="flag" src="../assets/other/World.png"></a></td>
					<td>World</td>
					<td>${(totalDensity).toFixed(2)}</td>
				</tr>
				<tr>
					<th colspan="4">Continents</th>
				</tr>
				<tr>
					<td>1</td>
					<td><a href="../Asia.html"><img class="flag" src="../assets/continent/Asia.png"></a></td>
					<td>Asia</td>
					<td>${(totalAsiaDensity).toFixed(2)}</td>
				</tr>
				<tr>
					<td>2</td>
					<td><a href="../Europe.html"><img class="flag" src="../assets/continent/Europe.png"></a></td>
					<td>Europe</td>
					<td>${(totalEuropeDensity).toFixed(2)}</td>
				</tr>
				<tr class="grayscale">
					<td>3</td>
					<td><a href="../Africa.html"><img class="flag" src="../assets/continent/Africa.png"></a></td>
					<td>Africa</td>
					<td>${(totalAfricaDensity).toFixed(2)}</td>
				</tr>
				<tr class="grayscale">
					<td>4</td>
					<td><a href="../North_America.html"><img class="flag" src="../assets/continent/North_America.png"></a></td>
					<td>North America</td>
					<td>${(totalNorthAmericaDensity).toFixed(2)}</td>
				</tr>
				<tr>
					<td>5</td>
					<td><a href="../South_America.html"><img class="flag" src="../assets/continent/South_America.png"></a></td>
					<td>South America</td>
					<td>${(totalSouthAmericaDensity).toFixed(2)}</td>
				</tr>
				<tr class="grayscale">
					<td>6</td>
					<td><a href="../Oceania.html"><img class="flag" src="../assets/continent/Oceania.png"></a></td>
					<td>Oceania</td>
					<td>${(totalOceaniaDensity).toFixed(2)}</td>
				</tr>
				<tr class="grayscale">
					<td>7</td>
					<td><a href="../Antarctica.html"><img class="flag" src="../assets/continent/Antarctica.png"></a></td>
					<td>Antarctica</td>
					<td>${(totalAntarcticaDensity).toFixed(2)}</td>
				</tr>
				<tr>
					<th colspan="4">Countries</th>
				</tr>
				${sortTableData(data).map((country, index) => `
					<tr>
						<td>${index + 1}</td>
						<td><a href="../${country.continent}/${country.name}.html"><img class="flag" src="../assets/country/flag/${country.continent}/${country.name}.png"></a></td>
						<td>${country.name.replace('_', ' ').replace('_', ' ')}</td>
						<td>${(country.population / country.area).toFixed(2)}</td>
					</tr>
				`).join('')}
			</tbody>
		</table>
	`;
	const densityDiv = document.getElementById('density');
	densityDiv.innerHTML = table;
})
.catch(error => console.error('Error fetching data:', error));

function sortTableData(data) {
	return data.sort((a, b) => (b.population / b.area) - (a.population / a.area));
}