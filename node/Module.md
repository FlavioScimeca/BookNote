# Modules in Node

- In Node.js, modules are a fundamental concept that enables developers to organize and encapsulate their code into reusable units. A module in Node.js is essentially a JavaScript file that encapsulates related functions, variables, and classes, making it easier to maintain and reuse code across different parts of an application.

- Node.js uses the CommonJS module system, which provides a way to define, import, and export modules. Here's how modules work in Node.js:

- Module Definition: To define a module, you create a JavaScript file and define the functions, variables, or classes that you want to export. The module can include private/internal functions and variables that are not accessible from outside the module.

- Exporting: In Node.js, you use the module.exports or exports object to export functions, variables, or objects from a module. These exported items can then be accessed by other modules that require this module.

_For example, to export a single function from a module:_

```js
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract,
};

<!-- ------------------------------------------------- -->
// another way to export

module.exports.items = ["item1","item2"];
const person = {
    name : "Baldassare"
};
module.exports.singlePerson = person

```

In this example, the module.exports object is used to expose the add and subtract functions as the public interface of the module. These functions can be accessed by other modules that require this module.

To use the functions from the math.js module in another file, you can use the require function to import the module:

```js
// app.js
const math = require('./math');

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
```

In this case, the require function is used to import the **math.js** module, and the exported functions can be accessed through the math object.

Node.js also provides a core set of built-in modules that can be accessed without the need for installation or additional configuration. These modules, such as fs for file system operations or http for creating web servers, offer a wide range of functionality to support common tasks in web development, networking, file handling, and more.

Additionally, Node.js has a package manager called npm (Node Package Manager) that allows developers to easily install and manage external modules and libraries, further expanding the capabilities and functionalities available for Node.js applications.

### _In summary, modules in Node.js enable code organization, encapsulation, and reusability. They allow developers to define and share functionality across different files and projects, promoting modular development practices and making it easier to build complex applications._
