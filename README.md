# REST_API

This API is a RESTful service designed to provide users with random quotes from the insightful Naval Ravikant.

## Features:

- **Random Quote Endpoint:**
  - Access the API's `/quote` endpoint to receive a randomly selected quote from Naval Ravikant in JSON format.
    - *{ "quote" : "Time is the ultimate currency, and I should have been more tight-fisted with it." }*
  - Access the API's `/text` endpoint to receive just a randomly selected quote from Naval Ravikant
    - *Time is the ultimate currency, and I should have been more tight-fisted with it.*

## Technologies

- **API:** Node.js, Express.js
- **HTTP Requests:** Axios
- **Styling:** Bootstrap
- **Container:** Docker

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

**OR**

**Deploy using the Docker file:**
   1. Build the Docker image using the Docker file:
      ```bash
       docker build -t docker-image-name .
      ```
   2. Run the Docker container:
      ```bash
       docker run -p 3000:3000 docker-image-name
      ```
  - The API will be available also at `http://localhost:3000` within the Docker container.
