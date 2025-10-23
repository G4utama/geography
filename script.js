function loadData(item) {
    if (window.location.pathname.endsWith(item.pageName)) {
        // Load the JSON file
        fetch(`data/${item.filePath}`)
            .then(response => response.json())
            .then(data => {
                // Create the HTML content

                const nameFormatted = data[0].name.replace('_', ' ').replace('_', ' ');
                const continentFormatted = data[0].continent.replace('_', ' ');
                const continentFormattedLower = data[0].continent.replace('_', ' ').replace('_', ' ').toLowerCase();

                const content = `
                    <h1><a href="../${data[0].continent}.html">${nameFormatted}</a></h1>
                    <hr>

                    <h2>Data</h2>
                    <table class="data">
                        <tbody>
                            <tr><th>Full Name</th><td>${data[0].full_name}</td></tr>
                            <tr><th>Native Name</th><td>${data[0].full_name_native}</td></tr>
                            <tr><th>Shape</th><td><img src="../assets/country/shape/${continentFormattedLower}/${data[0].name}.png"></td></tr>
                            <tr><th>Continent</th><td><a href="../${data[0].continent}.html">${continentFormatted}</a></td></tr>
                            <tr><th>Capital</th><td>${data[0].capital}</td></tr>
                            <tr><th>Language</th><td>${data[0].language.split(',').join('<br>')}</td></tr>
                            <tr><th>Area</th><td>${data[0].area.toLocaleString()} km2</td></tr>
                            <tr><th>Population</th><td>${data[0].population.toLocaleString()}</td></tr>
                            <tr><th>Currency</th><td>${data[0].currency}</td></tr>
                            <tr><th>Timezone</th><td>${data[0].timezone}</td></tr>
                            <tr><th>Anthem</th><td>${data[0].anthem}</td></tr>
                        </tbody>
                    </table>
                    <hr>

                    <h2>Flag</h2>
                    <img class="flag" src="../assets/country/flag/${continentFormattedLower}/${data[0].name}.png">
                    <p>Adopted: ${data[0].flagDate}</p>
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
                            ${data[0].flagColors.map((color, index) => {
                                const rgbValues = data[0].flagRGB[index].split(',');
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

                // Write the HTML content to the document
                const contentElement = document.getElementById('container');
                contentElement.innerHTML = content;
            })
            .catch(error => console.error(error));
    }
}

countryData.forEach(loadData);
