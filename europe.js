fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const europeCountries = data.filter(country => country.continent === 'Europe');
	europeCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="Europe/${country.name}.html">
					<img src="assets/country/flag/Europe/${country.name}.png" alt="Flag of ${nameFormatted}">
				</a>
			</div>
		`;
		document.getElementById('countryEurope').innerHTML += content;
	});
})
.catch(error => console.error(error));
