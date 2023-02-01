const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.send({ number: randomNumber });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});