# Connected Vehicle Management System (CVMS)

This is a Node.js application built with Express that provides an API for managing vehicle data, including tracking trips, checking anomalies, and viewing maintenance history.

## Features

- Create and manage vehicle records
- Add sample data for testing
- Fetch distance traveled by specific vehicles
- Check for sensor anomalies (e.g., speed and fuel levels)
- Retrieve maintenance history for vehicles
- Get a list of vehicles with frequent trips

## Requirements

- Node.js (version 14 or higher)
- npm (Node package manager)
- MySQL (or any compatible database)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cvms
   ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a <code>.env</code> file in the root directory and add your database configuration:
    ```bash
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

4. Running the Application:
    ```bash
    npm start
    ```

    The server will run on <code>http://localhost:3000</code> by default.

## API Endpoints

- GET /: Initializes the database tables
- POST /add-sample-data: Adds sample data to the database
- GET /distance-travelled/?: Retrieves the total distance traveled by a specific vehicle
- GET /vehicles/check-anomalies: Checks for any sensor anomalies
- GET /vehicles/maintenance-history: Fetches the maintenance history for a specific vehicle
- GET /vehicles/frequent-trips: Lists vehicles with frequent trips