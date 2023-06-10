# Http

HTTP stands for Hypertext Transfer Protocol. It is an application-level protocol used for communication between clients and servers over the internet. HTTP is the foundation of data exchange on the World Wide Web and allows the retrieval and display of hypertext documents, commonly known as web pages. Here are some key points about HTTP:

1. **Client-Server Model**: HTTP follows a client-server model, where the client (usually a web browser) sends a request to a server, and the server processes the request and sends back a response.

2. **Request-Response Cycle**: HTTP is based on a request-response cycle. The client initiates the cycle by sending an HTTP request to a server, specifying the desired action (e.g., retrieving a web page or submitting form data). The server then processes the request and generates an HTTP response, containing the requested data or an error message.

3. **Stateless Protocol**: HTTP is stateless, meaning that each request and response is independent of any previous or future requests and responses. The server does not maintain any memory of past requests from a specific client. However, session management mechanisms like cookies or tokens can be used to establish stateful behavior.

4. **HTTP Methods**: HTTP defines several methods (also known as verbs) that indicate the desired action to be performed on the server. The most commonly used HTTP methods are:

   - **GET**: Retrieves a resource from the server.
   - **POST**: Submits data to the server, often used for form submissions or creating new resources.
   - **PUT**: Updates an existing resource on the server.
   - **DELETE**: Deletes a resource on the server.
   - **PATCH**: Partially updates an existing resource on the server.

5. **URLs and URIs**: HTTP uses Uniform Resource Locators (URLs) to specify the location of resources on the web. A URL consists of a scheme (e.g., "http://" or "https://"), followed by the domain name or IP address of the server, and an optional path to a specific resource. URLs are a subset of Uniform Resource Identifiers (URIs), which provide a standard way to identify and locate resources.

6. **Headers**: HTTP messages, both requests, and responses, include headers that provide additional information about the message or the associated data. Headers can contain details such as content type, content length, caching instructions, authentication credentials, and more.

7. **Status Codes**: HTTP responses include status codes that indicate the outcome of the request. Status codes are three-digit numbers that fall into different categories. Some common status codes include:
   - **200 OK**: The request was successful, and the response contains the requested data.
   - **404 Not Found**: The requested resource could not be found on the server.
   - **500 Internal Server Error**: An unexpected error occurred on the server.

HTTP is a foundational protocol for web communication, enabling the retrieval and exchange of information between clients and servers. It allows the seamless navigation of the web, fetching resources like HTML, CSS, images, and more. HTTP forms the backbone of web applications and is widely used in building RESTful APIs for client-server interactions.
