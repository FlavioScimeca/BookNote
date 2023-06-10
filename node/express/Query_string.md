# Query string

In Express.js, the query string is a part of the URL that contains data appended at the end of the URL after a question mark (?). It is used to pass information from the client to the server as key-value pairs. The query string is often used for filtering, sorting, or providing additional parameters to an API endpoint.

Here's how the query string works in Express.js:

1. **Format**: The query string follows a specific format: `key1=value1&key2=value2&...`. Each key-value pair is separated by an ampersand (&), and the key and value are separated by an equals sign (=). The keys and values are typically URL-encoded.

2. **Accessing the Query String in Express**: In Express, the query string parameters can be accessed through the `req.query` object. The `req.query` object automatically parses the query string and provides an easy way to access its values. It returns an object with key-value pairs representing the query parameters.

3. **Example**: Let's assume the following URL: `http://example.com/api/users?name=John&age=25`. In this example, the query string contains two parameters: `name` and `age` with their corresponding values. In Express, you can access these values as follows:

   ```javascript
   app.get('/api/users', (req, res) => {
     const name = req.query.name; // "John"
     const age = req.query.age; // "25"

     // Do something with the query parameters...
   });
   ```

   In this code snippet, `req.query.name` retrieves the value of the `name` parameter from the query string, and `req.query.age` retrieves the value of the `age` parameter.

4. **Optional Parameters**: Query string parameters are optional by default. If a query parameter is not provided in the URL, the corresponding value in `req.query` will be `undefined`. You can handle such cases by checking if a query parameter exists or providing default values.

5. **Parsing and Handling Multiple Values**: If a query parameter appears multiple times in the query string, Express combines the values into an array. For example, `http://example.com/api/users?color=red&color=blue` will result in `req.query.color` being an array: `["red", "blue"]`.

6. **URL-Encoding**: Query string parameters should be properly URL-encoded to handle special characters and spaces. Express automatically decodes URL-encoded values in the `req.query` object, so you can access the original values.

The query string in Express.js provides a convenient way to pass data from the client to the server as part of the URL. It allows for the flexible and dynamic configuration of API endpoints, enabling filtering, sorting, and additional parameterization in a straightforward manner.
