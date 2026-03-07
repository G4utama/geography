fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const northAmericaCountries = data.filter(country => country.continent === 'North_America');
	northAmericaCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="North_America/${country.name}.html">
					<img src="assets/country/flag/North_America/${country.name}.png" alt="Flag of ${nameFormatted}">
				</a>
			</div>
		`;
		document.getElementById('countryNorthAmerica').innerHTML += content;
	});
})
.catch(error => console.error(error));
