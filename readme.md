# Weather App

A simple weather application that allows users to check the current weather conditions for any city.

## Features

- **City Search:** Users can search for weather data by entering the city name.
- **Real-Time Data:** Fetches and displays current temperature, feels-like temperature, and weather conditions.
- **Responsive UI:** Built with Tailwind CSS for a modern and responsive design.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd weather-app
    ```
3. **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) installed, then run:
    ```bash
    npm install
    ```

4. **Start the server:**
    ```bash
    node index.js
    ```
5. **Access the application:**
    Open your browser and go to `http://localhost:3000`.

## Usage

1. Enter the name of a city in the search input.
2. Click the "Go" button to fetch the weather data.
3. View the current temperature, feels-like temperature, and weather conditions for the selected city.

## Project Structure

```plaintext
weather-app/
│
├── assets/
│   └── bgimg.jpg          # Background image
│
├── public/
│   └── (optional: static files served here)
│
├── home.html              # Main HTML file
├── style.css              # Main stylesheet
├── index.js               # Server-side JavaScript
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation
