const express = require('express');
const dotenv = require('dotenv');
const quotes = require('./data/quotes.json');

dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT;

// Route to get a random quote JSON FORMAT
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ 'quote' : quotes[randomIndex] });
});

// Route to get a random quote TEXT FORMAT
app.get('/text', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

//  Listening Port
app.listen(port, () => {
  console.log(`Server is running.`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    title: "REST API",
    content: "Displays a random quote from Naval Ravikant",
  });
});
//  Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
