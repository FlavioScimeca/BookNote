const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log('This middleware runs for every request');
  next();
});

// Route-specific middleware
app.use('/api', (req, res, next) => {
  console.log('This middleware runs only for /api routes');
  next();
});

// Chained middleware
const middleware1 = (req, res, next) => {
  console.log('Middleware 1');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2');
  next();
};

app.use('/path', [middleware1, middleware2]);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/path', (req, res) => {
  res.send('Hello, Path!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'API data' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
