# useEffect

### The lifecycle of Component consists of three main parts:

- Mounting
- Updating
- Unmounting
  > when the user lands on the page, the component is <mark>mounted</mark>, then as the states update, the component is also <mark>updated</mark> and, finally the component is <mark>unmounted</mark> when the user leaves the page.

<br/>

#### In short, useEffect is a tool that allows us to interact with the outside world but doesn't affect the rendering or performance of the component it's in

## Syntax

```js
useEffect(
  // The function passed to useEffect is a callback function that will be called after the component is rendered.
  //In this function we can perform the side effect, or multiple side effects if we wish.
  () => {
    // Mounting

    return () => {
      // Cleanup function
      // Some effects require cleanup to reduce memory leaks.
    };
  },

  [
    /*Updating*/
  ]

  /*  What this array will do is check and see if a value (in this case the name) has changed between renders. In that case, it will perform our effect usage function again. */
);
```

"The useEffect hook is useful when you wish to run some functions during the component's lifecycle. For example, if you want to update the UI when a state changes, the useEffect hook is the way to go. You can also define a state on first load (when componentDidMount), and also clean the state when the component is unmounting (componentWillUnmount)"

## Example

```js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Function
    document.title = `You clicked ${count} times`;
  }, [count]); //The components will update when count changes

  return (
    <StyledButton onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </StyledButton>
  );
};

export default MyButton;
```

# Clean up

```js
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // The cleanup function will be called when the component is disassembled.
    return () => clearTimeout(timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
```

**A common example of disassembling a component is navigating to a new page or path in our application where the component no longer displays.**

**When a component is unmounted, our cleanup function runs, our range is cleared, and we no longer get an error trying to update a state variable that doesn't exist.**

**Finally, side effect cleanup is not required in all cases. It is only required in some cases, such as when a repeating side effect needs to be stopped when the component disassembles**
