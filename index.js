const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const express = require('express');
const app = express();

const port = process.env.PORT;

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
