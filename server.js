// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/local-weather-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/local-weather-app/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});