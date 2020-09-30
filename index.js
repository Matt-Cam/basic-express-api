const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API is up and running!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
