# App.put()

In Express.js, the `app.put()` function is used to define a route handler for HTTP PUT requests. The PUT method is typically used to update an existing resource on the server. With `app.put()`, you can specify the route path and provide a callback function to handle the PUT request.

Here's an example that demonstrates the usage of `app.put()` in Express.js:

```javascript
const express = require('express');
const app = express();

// Route handler for PUT request
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  // Logic to update user data in the database
  // ...

  res.send(`User ${userId} updated successfully`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define a route handler for the PUT request at the path `/users/:id`. The `:id` is a route parameter that allows capturing the value of the `id` parameter from the request URL.

When a PUT request is made to `/users/:id`, the callback function is executed. Inside the callback, we can access the captured `id` parameter using `req.params.id`. This allows us to identify the specific user we want to update.

The updated data sent in the PUT request can be accessed using `req.body`. This assumes that the request body is properly parsed, typically using middleware such as `express.json()` or `express.urlencoded()`.

Inside the route handler, you can write the logic to update the user data in a database or perform any other necessary actions. In this example, it's represented by the comment `// Logic to update user data in the database`.

Finally, a response is sent back to the client using `res.send()`, confirming the successful update of the user.
