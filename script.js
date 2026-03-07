function loadData(item) {
    if (window.location.pathname.endsWith(item.pageName)) {
        fetch(`../other/country.json`)
            .then(response => response.json())
            .then(data => {
                const countryData = data.filter(country => country.name === item.pageName.replace('.html', ''));

                const nameFormatted = countryData[0].name.replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ');
                
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
                            <tr><th>Continent</th><td><a href="../${countryData[0].continent}.html">${continentFormatted}</a> <span style="color: red">*</span></td></tr>
                            <tr><th>Capital</th><td>${countryData[0].capital}</td></tr>
                            <tr><th>Language</th><td>${countryData[0].language.split(',').join('<br>')}</td></tr>
                            <tr><th>Area</th><td><a href="../${countryData[0].continent}/other/area.html">${countryData[0].area.toLocaleString()} km2</a> <span style="color: red">*</span></td></tr>
                            <tr><th>Population</th><td><a href="../${countryData[0].continent}/other/population.html">${countryData[0].population.toLocaleString()}</a> <span style="color: red">*</span></td></tr>
                            <tr><th>Density</th><td>${(countryData[0].population / countryData[0].area).toFixed(2)} /km2</td></tr>
                            <tr><th>Currency</th><td>${countryData[0].currency}</td></tr>
                            <tr><th>Timezone</th><td>${countryData[0].timezone}</td></tr>
                        </tbody>
                    </table>
                    <p><span style="color: red">*</span> link to other page</p>
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
                                const rgbColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
                                const textColor = getTextColor(rgbColor);
                                return `
                                <tr>
                                    <th style="color: ${textColor}; background-color: ${rgbColor};">${color}</th>
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

function getTextColor(backgroundColor) {
    const rgb = backgroundColor.match(/\d+/g);
    const red = parseInt(rgb[0]);
    const green = parseInt(rgb[1]);
    const blue = parseInt(rgb[2]);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return brightness > 125 ? '#000000' : '#ffffff';
}

countryPage.forEach(loadData);
