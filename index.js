require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5500; // Changed from 5000 to 5500

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('panic_coder');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login to Paniccoder.com</h1>');
});

app.get('/URL', (req, res) => {
  res.send('<h3>Oouta your URL</h3>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
