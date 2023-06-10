# HTTP headers

HTTP headers are additional pieces of information sent along with an HTTP request or response. They provide metadata about the request or response, allowing the client and server to communicate important details such as the content type, caching instructions, authentication credentials, and more. Headers consist of a name-value pair, where the name represents the specific information being communicated, and the value provides the corresponding data.

In Node.js, you can work with HTTP headers using the built-in `http` module. Here's an example that demonstrates how to set and read headers in a Node.js server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'no-cache');

  // Read request headers
  const contentType = req.headers['content-type'];
  const userAgent = req.headers['user-agent'];

  // Send a response with the headers
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, we create an HTTP server using `http.createServer()`. In the request handler function, we interact with headers.

- **Setting Response Headers**: We use `res.setHeader(name, value)` to set response headers. In the example, we set the `Content-Type` header to `text/plain` and the `Cache-Control` header to `no-cache`. These headers inform the client about the type of data being sent and caching instructions.

- **Reading Request Headers**: We can access request headers through the `req.headers` object, which provides a key-value map of all the headers sent in the request. In the example, we read the `Content-Type` and `User-Agent` headers using `req.headers['header-name']`. These headers provide information about the content type of the request payload and the user agent (browser or client) making the request.

- **Sending the Response**: Finally, we send a response back to the client using `res.end()`. The response includes the headers we set previously and the response body, which in this case is the string `'Hello, World!'`.

HTTP headers play a crucial role in communication between clients and servers. They enable various functionalities such as content negotiation, caching, authentication, and more. By setting and reading headers, you can control the behavior of your server and exchange relevant information with clients.

## More info -> node [Docs](https://nodejs.org/dist/latest-v18.x/docs/api/http.html)
