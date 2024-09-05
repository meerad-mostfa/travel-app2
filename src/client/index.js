import './styles/styles.scss';
import {
  getGeoCoordinates,
  getWeatherForecast,
  getImageForLocation,
  renderTripDetails,
  calculateDaysDiff,
} from './js/app.js';

// Event listener for the travel form submission
document.getElementById('travel-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    // Retrieving user inputs
    const userInput = {
      destination: document.getElementById('location').value,
      startDate: document.getElementById('start-date').value,
      endDate: document.getElementById('end-date').value,
    };

    // Validating user inputs
    if (!userInput.destination || !userInput.startDate || !userInput.endDate) {
      throw new Error('Please fill in all required fields');
    }

    // Fetching coordinates, weather, and image data
    const locationCoordinates = await getGeoCoordinates(userInput.destination);
    const locationWeather = await getWeatherForecast(locationCoordinates.lat, locationCoordinates.lng);
    const locationImage = await getImageForLocation(userInput.destination);

    // Calculating the trip duration
    const tripLength =calculateDaysDiff(userInput.startDate, userInput.endDate);

    // Rendering the trip details on the page
    renderTripDetails(locationCoordinates, locationWeather, locationImage, userInput.startDate, userInput.endDate, tripLength);
  } catch (error) {
    console.error('An error occurred while fetching trip data:', error);
    alert('Failed to retrieve trip details. Please check your input and try again later.');
  }
});