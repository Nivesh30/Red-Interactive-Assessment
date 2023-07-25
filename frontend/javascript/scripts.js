// Function to fetch data from the API
function fetchData() {
    const apiUrl = 'http://localhost:3000/api/page'; 

    // Using the fetch API to make a GET request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Call a function to display the data on the page
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display the fetched data on the HTML page
function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // Clear the existing content in the container
    dataContainer.innerHTML = '';

    // Loop through the data and create HTML elements to display it
    data.forEach(item => {
        const priceElement = document.createElement('p');
        priceElement.textContent = item.price;
        priceElement.classList.add('price');
        dataContainer.appendChild(priceElement);
    
        const titleElement = document.createElement('p');
        titleElement.textContent = item.title;
        titleElement.classList.add('title');
        dataContainer.appendChild(titleElement);
    });
}

// Call the fetchData function when the page loads
window.onload = fetchData;