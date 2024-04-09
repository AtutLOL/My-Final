const axios = require('axios');

const apiUrl = 'https://api.example.com/tourism/chonburi';

const fetchAttractionsData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching attractions data:', error);
  }
};

const displayAttractions = (data) => {
  const attractionsDiv = document.getElementById('attractions');
  const { attractions } = data;

  const attractionsList = attractions.map((attraction) => {
    const { name, description, image } = attraction;
    return `
      <div class="attraction">
        <h2>${name}</h2>
        <img src="${image}" alt="${name}">
        <p>${description}</p>
      </div>
    `;
  }).join('');

  attractionsDiv.innerHTML = attractionsList;
};

fetchAttractionsData().then(displayAttractions);