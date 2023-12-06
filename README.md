# REST_API

This API is a RESTful service designed to provide users with random quotes from the insightful Naval Ravikant.

## Features:

- **Random Quote Endpoint:**
  - Access the API's `/quote` endpoint to receive a randomly selected quote from Naval Ravikant in JSON format.
    - *{ "quote" : "Time is the ultimate currency, and I should have been more tight-fisted with it." }*
  - Access the API's `/text` endpoint to receive just a randomly selected quote from Naval Ravikant
    - *Time is the ultimate currency, and I should have been more tight-fisted with it.*

## Technologies and Languages Used:

- **Node.js and Express.js:**
  - The API is built using Node.js, a server-side JavaScript runtime, and Express.js, a popular web application framework for Node.js. This combination enables the creation of fast and scalable web APIs.

- **Docker:**
  - The project is containerized using Docker, providing a consistent and isolated environment for the application. This simplifies deployment across various platforms and enhances scalability.

## Setup Steps:

1. **Clone the Repository:**
   - Clone this repository to your local machine using the following command:
     ```bash
     git clone [this-repository-link]
     ```

2. **Navigate to the Project Directory:**
   - Change into the project directory:
     ```bash
     cd REST_API
     ```

3. **Install Dependencies:**
   - Install the necessary Node.js dependencies using:
     ```bash
     npm install
     ```

4. **Run the Application Locally:**
   - Start the Express.js server locally:
     ```bash
     node app.js
     ```
     The API will be accessible at `http://localhost:3000`.

5. **Containerize with Docker:**
   - Build the Docker image using the Dockerfile:
     ```bash
     docker build -t docker-image-name .
     ```

   - Run the Docker container:
     ```bash
     docker run -p 3000:3000 docker-image-name
     ```
     The API will be available also at `http://localhost:3000` within the Docker container.
