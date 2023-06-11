# Middleware with app.use()

In Express.js, the `app.use()` function is a core middleware function used to mount middleware functions in the application's request processing pipeline. It allows you to define middleware that will be executed for every incoming request, regardless of the HTTP method or route.

The `app.use()` function takes a middleware function as an argument. The middleware function has access to the `req` (request), `res` (response), and `next` parameters, and it can perform tasks such as modifying the request or response objects, executing additional logic, or invoking the next middleware in the pipeline.

Here are the key aspects of `app.use()` in Express.js:

1. **Global Middleware**: `app.use()` is typically used to define global middleware that will be executed for every incoming request. It is commonly used for tasks like logging, parsing request bodies, handling CORS, or authentication.

2. **Order of Execution**: Middleware functions are executed in the order they are defined. The order is significant because each middleware can modify the `req` and `res` objects or terminate the request-response cycle.

3. **Mounting Middleware**: You can specify the path or route at which the middleware should be mounted. If no path is specified, the middleware will be executed for every request. If a path is specified, the middleware will be executed only when the request path matches the specified path.

4. **Chaining Middleware**: Multiple middleware functions can be chained together using multiple `app.use()` calls or by passing an array of middleware functions as arguments to a single `app.use()` call. This allows you to define a sequence of middleware to be executed in order.

5. **Next Function**: The `next` parameter is a callback function that allows the current middleware to pass control to the next middleware in the pipeline. By invoking `next()`, the execution flows to the next middleware function. If `next()` is not called, the request-response cycle can be terminated, or subsequent middleware functions will not be executed.

6. **Error Handling**: Error handling middleware can be defined using `app.use()` by providing a middleware function with four parameters `(err, req, res, next)`. This middleware is typically defined at the end of the middleware chain and is used to handle errors that occur during request processing.

Here's an example to illustrate the usage of `app.use()`:

```javascript
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

app.get('/api/data', (req, res) => {
  res.json({ message: 'API data' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define global middleware using `app.use()` to log a message for every incoming request. We also define route-specific middleware for `/api
