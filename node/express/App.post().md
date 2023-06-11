# App.post()

In Express.js, the `app.post()` function is used to define a route handler for HTTP POST requests. It specifies the callback function that will be executed when a POST request is made to the specified route.

Here's an example of using `app.post()` in Express.js:

```javascript
const express = require('express');
const app = express();

// Route handler for POST request to '/login'
app.post('/login', (req, res) => {
  // Access the data sent in the request body
  const { username, password } = req.body;

  // Perform authentication logic
  if (username === 'admin' && password === 'password') {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define a route handler for the HTTP POST request to the '/login' route using `app.post('/login', ...)`. When a POST request is made to '/login', the callback function is executed.

Inside the callback function, we can access the data sent in the request body using `req.body`. In this case, we assume that the request body contains a JSON object with properties 'username' and 'password'.

We perform some authentication logic to check if the provided credentials are valid. If the credentials match, we send a 'Login successful' response. Otherwise, we send a 401 Unauthorized status code with the message 'Invalid credentials'.

Remember that in order to access the request body data, you need to use middleware like `express.json()` or `express.urlencoded()` to parse the request body. Make sure to include them in your code before defining the routes.

Note: This example assumes that you have the necessary dependencies installed (`express` and any required middleware) and have set up the Express.js server properly.

<br>
<br>

# Example

`app.post()` in Express.js along with an HTML form and JavaScript:

First, create an HTML file named `index.html` with the following content:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post Example</title>
  </head>
  <body>
    <h1>Post Example</h1>
    <form id="myForm" action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <button type="submit">Submit</button>
    </form>

    <script>
      const form = document.getElementById('myForm');

      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Fetch data from the form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Create a JSON payload
        const payload = {
          name: name,
          email: email,
        };

        // Send a POST request to the server
        fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Handle the server response
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle errors
          });
      });
    </script>
  </body>
</html>
```

Next, create a JavaScript file named `server.js` with the following code to set up the Express.js server:

```javascript
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle POST request
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Perform any desired processing with the received data
  // For this example, we simply send a response back with the received data
  res.json({ name, email });
});

// Serve the HTML file
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

Make sure to place both the `index.html` and `server.js` files in the same directory. Also, install the Express.js package by running `npm install express` in the project directory.

To run the example, execute the command `node server.js` in the terminal. This starts the Express.js server on port 3000. Then, open your web browser and navigate to `http://localhost:3000`. You will see the form rendered in the browser. Enter a name and email address and click the "Submit" button. The form data will be sent as a POST request to the server, and the server will respond by sending the received data back as a JSON response.

This example demonstrates how to handle a POST request using `app.post()` in Express.js and how to send data from an HTML form to the server using JavaScript's `fetch()` function.
