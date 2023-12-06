const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const express = require('express');

const quotes = require('./data/quotes.json');

const app = express();
const port = process.env.PORT;


// Route to get a random quote
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ 'Naval Ravikant': quotes[randomIndex] });
});

// Route to get a random quote
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
    title: "My REST API",
  });
});
//  Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
