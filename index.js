const express = require('express');
const app = express();
const port = process.env.PORT || '8080';

app.get('/', (req, res) => {
  res.send('API is up and running!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
