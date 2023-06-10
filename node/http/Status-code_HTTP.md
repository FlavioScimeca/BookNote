# Status codes

HTTP defines a range of status codes that indicate the outcome of a request. Each status code falls into a specific category, providing information about the success or failure of the request. Here is an overview of the different categories and some commonly used status codes:

1. **Informational Responses (1xx)**: These are informational status codes indicating that the request is received and understood. Some examples include:

   - 100 Continue: The initial part of the request was received, and the client should continue with the request.

2. **Successful Responses (2xx)**: These status codes indicate that the request was successfully received, understood, and processed. Some examples include:

   - 200 OK: The request was successful, and the response contains the requested data.
   - 201 Created: The request was successful, and a new resource was created as a result.
   - 204 No Content: The request was successful, but the response does not contain any content.

3. **Redirection Messages (3xx)**: These status codes indicate that further action is needed to complete the request. The client may need to take additional steps to fulfill the request. Some examples include:

   - 301 Moved Permanently: The requested resource has been permanently moved to a new URL.
   - 302 Found: The requested resource has been temporarily moved to a different URL.
   - 304 Not Modified: The client can use cached data since the requested resource has not been modified.

4. **Client Error Responses (4xx)**: These status codes indicate that the client's request contains an error or cannot be fulfilled. Some examples include:

   - 400 Bad Request: The server could not understand the request due to malformed syntax or invalid parameters.
   - 401 Unauthorized: The client needs to authenticate itself to access the requested resource.
   - 404 Not Found: The requested resource could not be found on the server.

5. **Server Error Responses (5xx)**: These status codes indicate that there was an error on the server while processing the request. Some examples include:
   - 500 Internal Server Error: An unexpected error occurred on the server.
   - 503 Service Unavailable: The server is temporarily unable to handle the request due to maintenance or overload.

These are just a few examples of status codes within each category. HTTP defines many more status codes, each serving a specific purpose to provide information about the outcome of a request.

It's worth noting that different frameworks or APIs may introduce their own custom status codes to convey specific application-level information or to extend the standard HTTP status codes for their purposes.
