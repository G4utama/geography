fetch('../../other/country.json')
.then(response => response.json())
.then(data => {
	const southAmericaData = data.filter(country => country.continent === 'South_America');
	const totalPopulation = southAmericaData.reduce((acc, country) => acc + country.population, 0);

	const table = `
		<table>
			<thead>
			<tr>
				<th>#</th>
				<th>Flag</th>
				<th>Country</th>
				<th>Population</th>
				<th>Percentage</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					<td><a href="../../South_America.html"><img class="flag" src="../../assets/continent/South_America.png"></a></td>
					<td>South America</td>
					<td>${totalPopulation.toLocaleString()}</td>
					<td>100%</td>
				</tr>
				<tr>
                    <th colspan="5">Countries</th>
                </tr>
			${sortTableData(southAmericaData).map((country, index) => `
				<tr>
					<td>${index + 1}</td>
					<td><a href="../../${country.continent}/${country.name}.html"><img class="flag" src="../../assets/country/flag/${country.continent}/${country.name}.png"></a></td>
					<td>${country.name.replace('_', ' ').replace('_', ' ')}</td>
					<td>${(country.population).toLocaleString()}</td>
					<td>${((country.population / totalPopulation) * 100).toFixed(2)}%</td>
				</tr>
			`).join('')}
			</tbody>
		</table>
	`;
	const populationDiv = document.getElementById('population');
	populationDiv.innerHTML = table;
})
.catch(error => console.error(error));

function sortTableData(data) {
  	return data.sort((a, b) => b.population - a.population);
}
