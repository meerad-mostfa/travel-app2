# Travel Planner 2
**Author:** Meerad Mostfa

A web application designed to help users plan and manage their trips efficiently. It integrates multiple APIs to provide comprehensive travel information, including weather forecasts, images, and more.

## Features


Location Data Retrieval: Gathers comprehensive geographic information.
Weather Forecasting: Offers weather updates tailored to your travel plans.
Image Search: Shows location images using the Pixabay API.
Trip Duration: Computes and presents the total length of your trip.
Persistent Storage: Stores trip details locally for convenient access on future visits.


## Getting Started

### Prerequisites
- Node.js: Version 16 or higher is required to run this application.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/meerad-mostfa/travel-app2.git
    ```
2. Change into the project directory:
    ```bash
    cd travel-app2
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Development
1. Build for development:
    ```bash
    npm run build
    ```
2. Start the server:
    ```bash
    npm start
    ```

### Testing
1. Run tests:
    ```bash
    npm test
    ```

## Configuration

### Updating API Credentials
To ensure that the application can access the APIs, you need to update the API keys in the configuration files:

- **GeoNames API**:
  1. Navigate to the `config` or `src/config` directory.
  2. Open the configuration file for GeoNames.
  3. Enter your GeoNames API key in the `GEONAMES_API_KEY` variable.

- **Weatherbit API**:
  1. Navigate to the `config` or `src/config` directory.
  2. Open the configuration file for Weatherbit.
  3. Enter your Weatherbit API key in the `WEATHERBIT_API_KEY` variable.

- **Pixabay API**:
  1. Navigate to the `config` or `src/config` directory.
  2. Open the configuration file for Pixabay.
  3. Enter your Pixabay API key in the `PIXABAY_API_KEY` variable.

Make sure that all configuration files are updated with the correct API keys to avoid issues accessing the APIs.

## Usage Instructions

1. Launch the Application: Open the application in your web browser.
2. Input Destination and Travel Dates: Enter your desired destination and travel dates to receive trip information.
3. Access Weather Forecasts and Location Images: View weather forecasts and images of the location, and calculate the duration of your trip.

## Acknowledgements

- GeoNames API
- Weatherbit API
- Pixabay API
