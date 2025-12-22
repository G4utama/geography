function loadData(item) {
    if (window.location.pathname.endsWith(item.pageName)) {
        fetch(`../other/country.json`)
            .then(response => response.json())
            .then(data => {
                const countryData = data.filter(country => country.name === item.pageName.replace('.html', ''));

                const nameFormatted = countryData[0].name.replace('_', ' ').replace('_', ' ');
                
                const continentFormatted = countryData[0].continent.replace('_', ' ');
                const continentFormattedLower = countryData[0].continent.replace('_', ' ').replace('_', ' ').toLowerCase();

                const content = `
                    <h1><a href="../${countryData[0].continent}.html">${nameFormatted}</a></h1>
                    <hr>

                    <h2>Data</h2>
                    <table class="data">
                        <tbody>
                            <tr><th>Full Name</th><td>${countryData[0].full_name}</td></tr>
                            <tr><th>Native Name</th><td>${countryData[0].full_name_native}</td></tr>
                            <tr><th>Shape</th><td><img src="../assets/country/shape/${countryData[0].continent}/${countryData[0].name}.png"></td></tr>
                            <tr><th>Continent</th><td><a href="../${countryData[0].continent}.html">${continentFormatted}</a></td></tr>
                            <tr><th>Capital</th><td>${countryData[0].capital}</td></tr>
                            <tr><th>Language</th><td>${countryData[0].language.split(',').join('<br>')}</td></tr>
                            <tr><th>Area</th><td>${countryData[0].area.toLocaleString()} km2</td></tr>
                            <tr><th>Population</th><td>${countryData[0].population.toLocaleString()}</td></tr>
                            <tr><th>Density</th><td>${(countryData[0].population / countryData[0].area).toFixed(2)} /km2</td></tr>
                            <tr><th>Currency</th><td>${countryData[0].currency}</td></tr>
                            <tr><th>Timezone</th><td>${countryData[0].timezone}</td></tr>
                            <tr><th>Anthem</th><td>${countryData[0].anthem}</td></tr>
                        </tbody>
                    </table>
                    <hr>

                    <h2>Flag</h2>
                    <img class="flag" src="../assets/country/flag/${countryData[0].continent}/${countryData[0].name}.png">
                    <p>Adopted: ${countryData[0].flagDate}</p>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>R</th>
                                <th>G</th>
                                <th>B</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${countryData[0].flagColors.map((color, index) => {
                                const rgbValues = countryData[0].flagRGB[index].split(',');
                                return `
                                    <tr>
                                        <th>${color}</th>
                                        ${rgbValues.map((value, i) => `<td>${value.trim()}</td>`).join('')}
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                `;

                const contentElement = document.getElementById('container');
                contentElement.innerHTML = content;
            })
            .catch(error => console.error(error));
    }
}

countryPage.forEach(loadData);
