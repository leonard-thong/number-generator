const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.send({ number: randomNumber });
});

app.listen(PORT, () => {
  console.log('App started');
});