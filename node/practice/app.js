const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About page');
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' },
  ];

  res.json(users);
});

app.all('*', (req, res) => {
  res.status(400).send('<h1>Resource not available</h1>');
});

app.listen(3000, () => {
  console.log('server running in port 3000');
});
