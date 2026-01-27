fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const worldCountries = data.filter(country => country.continent === 'Asia' || country.continent === 'Africa' || country.continent === 'Europe' || country.continent === 'North_America' || country.continent === 'South_America' || country.continent === 'Oceania' || country.continent === 'Antarctica');
	worldCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="${country.continent}/${country.name}.html">
					<img src="assets/country/flag/${country.continent}/${country.name}.png" alt="Flag of ${nameFormatted}">
				</a>
			</div>
		`;
		document.getElementById('countryWorld').innerHTML += content;
	});
})
.catch(error => console.error(error));
