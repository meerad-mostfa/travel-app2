Travel Planner 2
Author: Meerad Mostfa

A web application designed to help users plan and manage their trips efficiently. It integrates multiple APIs to provide comprehensive travel information, including weather forecasts, images, and more.

Features
Location Data Retrieval: Fetches detailed geographic information.
Weather Forecasting: Provides weather updates specific to your trip.
Image Search: Displays location images via the Pixabay API.
Trip Duration: Calculates and displays the length of your trip.
Persistent Storage: Saves trip details locally for easy access on return visits.
Getting Started
Prerequisites
Node.js: Version 16 or higher is required to run this application.
Installation
1 Clone the repository:
git clone https://github.com/meerad-mostfa/travel-app2.git
2 Change into the project directory: 
cd travel-app2
3 Install dependencies: 
npm install
Development
1 Build for development:
npm run build
2 Start the server:
npm start
Testing
1 Run tests:
npm test
**************************************************
Configuration
Updating API Credentials
GeoNames API

Open the configuration file for GeoNames located in the config or src/config directory.
Enter your GeoNames API key in the GEONAMES_API_KEY variable.
Weatherbit API

Open the configuration file for Weatherbit located in the config or src/config directory.
Enter your Weatherbit API key in the WEATHERBIT_API_KEY variable.
Pixabay API

Open the configuration file for Pixabay located in the config or src/config directory.
Enter your Pixabay API key in the PIXABAY_API_KEY variable.
Ensure that all configuration files are updated with the correct API keys to avoid any issues accessing the APIs.

Usage Instructions

1 Launch the Application: Open the application in your web browser.
2 Input Destination and Travel Dates: Enter your desired destination and travel dates to receive trip information.
3 Access Weather Forecasts and Location Images: View weather forecasts and images of the location, and calculate the duration of your trip.

Acknowledgements
GeoNames API
Weatherbit API
Pixabay API


