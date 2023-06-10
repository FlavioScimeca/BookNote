# React Context

React Context is a way to manage state globally and avoid **prop drilling**.

It's Hook used _**to share state/data between deeply nested components**_ more easily than with useState alone.

# Syntax

To create context, you must Import createContext and initialize it:

```js
import { createContext } from 'react';

const UserContext = createContext();
```

Next we'll use the Context Provider to wrap the tree of components that need the state Context.

<hr>

## Context Provider

Wrap child components in the Context Provider and supply the state value.

```js
function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
```

Now, all components in this tree will have access to the user Context.

<hr>

## Use the useContext Hook

In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement.  
Then you can access the user Context in all components.

```js
import { useContext } from 'react';

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

# Another way to use useContext

## Extract the React Context logic in another file

> First, we'll create a UserContextProvider component inside of a new file called UserContext.jsx  
> This component is the one that will hold the logic for getting the value of the context (user) and giving it to the UserContext.Provider:

```js
import React, { createContext, useState, useEffect } from 'react';

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchUser = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((result) => setUser(result.results[0]))
        .catch((error) => console.log('An error occured'));
    };

    fetchUser();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
```

<hr>

> **Now that we're removed the above from our App component, it's way cleaner**

```js
import React, { useContext } from 'react';

import { UserContext, UserContextProvider } from './UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <Page />
    </UserContextProvider>
  );
};

const Page = () => {
  // access the context value
  const user = useContext(UserContext);

  if (user?.login?.username) {
    return <p>You are logged in as {user?.login.username}</p>;
  } else {
    return <p>You are not logged in</p>;
  }
};

export default App;
```

# Use React Context with a custom hook

```js
// context consumer hook
const useUserContext = () => {
  // get the context
  const context = useContext(UserContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};
```

And to use it, simply import the hook and use it in the Page component:

```js
const Page = () => {
  // access the context value
  const user = useUserContext();

  if (user?.login?.username) {
    return <p>You are logged in as {user?.login.username}</p>;
  } else {
    return <p>You are not logged in</p>;
  }
};
```

> _It's usually a good idea to wrap context values with memoizing functions like useMemo and useCallback.  
> Context values are often used in dependency arrays in context consumers. If you don't memoize context values, you can end up with unwanted behaviors like useEffect triggering unnecessarily._

### [Link for more](https://devtrium.com/posts/how-use-react-context-pro)
