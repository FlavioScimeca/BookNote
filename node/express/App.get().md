# App.get()

In Express.js, the app.get() method is used to define a route handler for GET requests on a specific route. It specifies the callback function that will be executed when a GET request is made to that route.

<hr>

`app.get()` in Express.js to define a route that handles GET requests:

```javascript
const express = require('express');
const app = express();

// Route handler for GET request to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route handler for GET request to '/about'
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route handler for GET request to '/users/:id'
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define three route handlers using `app.get()`. Each handler is associated with a specific HTTP GET request to a particular path.

1. The first route handler handles GET requests to the root path `'/'`. When a client sends a GET request to the root path, the handler function is executed, and it sends the response with the message `'Hello, World!'`.

2. The second route handler handles GET requests to the path `'/about'`. When a client sends a GET request to `'/about'`, the handler function is executed, and it sends the response with the message `'This is the about page.'`.

3. The third route handler handles GET requests to the path `'/users/:id'`. The `:id` parameter in the path indicates a dynamic parameter that can be accessed using `req.params.id`. The handler function extracts the value of `:id` from the request parameters and sends the response with a message containing the user ID.

When you run this code and navigate to `http://localhost:3000/` in your browser, you will see the message "Hello, World!" displayed. Similarly, visiting `http://localhost:3000/about` will display the message "This is the about page." And visiting `http://localhost:3000/users/123` will display "User ID: 123", assuming you replace `123` with any desired user ID.
