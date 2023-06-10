# Basics

In Node.js, you can work with HTTP using the built-in `http` module, which provides functionality to create an HTTP server, send HTTP requests, and handle HTTP responses. Here are the basics of working with HTTP in Node.js:

1. **Creating an HTTP Server**: To create an HTTP server in Node.js, you need to use the `http` module's `createServer()` method. Here's an example:

   ```javascript
   const http = require('http');

   // Create an HTTP server
   const server = http.createServer((request, response) => {
     // Handle incoming requests
     // ...
   });

   // Start the server
   server.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

   In this example, we create an HTTP server that listens on port 3000. The server's callback function is executed whenever a request is made to the server. Inside the callback function, you can handle the incoming requests and provide appropriate responses.

2. **Handling HTTP Requests**: When a request is made to your server, the callback function specified in `createServer()` is invoked with two arguments: `request` and `response`. The `request` object represents the incoming HTTP request, and the `response` object is used to send back the HTTP response.

   You can access various properties and methods of the `request` object to retrieve information about the request, such as the request method, URL, headers, and request body.

3. **Sending HTTP Responses**: To send an HTTP response back to the client, you can use the methods provided by the `response` object. Here's an example:

   ```javascript
   const http = require('http');

   const server = http.createServer((request, response) => {
     // Set the response status code
     response.statusCode = 200;

     // Set the response headers
     response.setHeader('Content-Type', 'text/plain');

     // Send the response body
     response.end('Hello, world!');
   });

   server.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

   In this example, we set the status code of the response to `200` (indicating a successful response). We also set the `Content-Type` header to `text/plain` to specify that the response body is plain text. Finally, we send the response body using the `end()` method.

4. **Making HTTP Requests**: Node.js also allows you to send HTTP requests to other servers. You can use the `http` or `https` module's `request()` method to send an HTTP request. Here's an example:

   ```javascript
   const http = require('http');

   // Make an HTTP GET request
   const request = http.request('http://api.example.com/data', (response) => {
     // Handle the response
     response.on('data', (chunk) => {
       console.log(chunk.toString());
     });
   });

   // Send the request
   request.end();
   ```

   In this example, we make an HTTP GET request to `http://api.example.com/data`. We specify a callback function that will be invoked when the response is received. Inside the callback, we listen for the `data` event on the response, which is triggered when a chunk of data is received. We can then process the received data.

These are the basics of working with HTTP in Node.js. The `http` module provides more advanced features for handling cookies, redirects, handling different request methods, and more. Additionally, you can use third-party libraries like `axios` or `node-fetch` for more convenient and feature-rich
