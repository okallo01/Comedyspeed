const githubUrl = 'https://raw.githubusercontent.com/okallo01/Comedyspeed/main/data/products.json';

        fetch(githubUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                displayStoreItems(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

        function displayStoreItems(data) {
            const jsonContainer = document.getElementById('json-container');

            // Loop through each item in the JSON array
            data.forEach(item => {
                // Create a new div for each item with the "product" class
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('product');

                // Populate the div with information from the item
                itemDiv.innerHTML = `

                    <img src="${item.Image}" alt="${item.Name}">
                    <br>
                    <h5><strong>${item.Name}</strong></h5>
                    <a href="${item.Link}" target="_blank" class="btn btn-info">Buy Now</a>
                `;

                // Append the new div to the container
                jsonContainer.appendChild(itemDiv);
            });
        } 