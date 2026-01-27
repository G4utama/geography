fetch('other/country.json')
.then(response => response.json())
.then(data => {
	const asiaCountries = data.filter(country => country.continent === 'Asia');
	asiaCountries.forEach(country => {
		const nameFormatted = country.name.replace('_', ' ').replace('_', ' ');
		const content = `
			<div>
				<p>${nameFormatted}</p>
				<a href="Asia/${country.name}.html">
					<img src="assets/country/flag/Asia/${country.name}.png" alt="Flag of ${nameFormatted}">
				</a>
			</div>
		`;
		document.getElementById('countryAsia').innerHTML += content;
	});
})
.catch(error => console.error(error));
