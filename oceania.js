fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const oceaniaCountries = data.filter(country => country.continent === 'Oceania');
	oceaniaCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="Oceania/${country.name}.html">
					<img src="assets/country/flag/Oceania/${country.name}.png">
				</a>
			</div>
		`;
		document.getElementById('countryOceania').innerHTML += content;
	});
})
.catch(error => console.error(error));
