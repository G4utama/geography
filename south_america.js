fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const southAmericaCountries = data.filter(country => country.continent === 'South_America');
	southAmericaCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="South_America/${country.name}.html">
					<img src="assets/country/flag/South_America/${country.name}.png" alt="Flag of ${nameFormatted}">
				</a>
			</div>
		`;
		document.getElementById('countrySouthAmerica').innerHTML += content;
	});
})
.catch(error => console.error(error));
