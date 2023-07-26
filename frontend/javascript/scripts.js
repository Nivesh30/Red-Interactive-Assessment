// JavaScript function to fetch data from API
function fetchData() {
    const apiUrl = 'http://localhost:3000/api/page'; 

    // using the fetch API to GET data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // call the function to display the data on the page
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// function to display the fetched data on the HTML page
function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // clear the existing content in the container
    dataContainer.innerHTML = '';

    // loop through the data and create HTML elements to display it
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

// call the fetchData function when the page loads
window.onload = fetchData;
