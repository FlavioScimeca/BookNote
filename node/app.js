const http = require('http');

const server = http.createServer((req, res) => {
  const contentType = 'text/plain'; // Example MIME type

  res.setHeader('Content-Type', contentType);
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
