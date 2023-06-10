# Reducer

The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.  
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful

# Syntax

The useReducer Hook accepts two arguments.

```js
import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducerMethod, initialValue);

//The reducer method contains your state logic. You can choose which state logic to call using the dispatch method. The state can also have some initial value similar to the useState hook.
```

- How to Define the Reducer Method
  > The reducer method contains our state updates. The method takes two arguments, the **current state** value and an **action object**. The action object contains the type of the action and additional data needed to perform the update.  
  > We'll use switch-case to select the type of operation to be performed

<hr>

```js
import { useReducer } from 'react';

let initialState: object[] = [
  {
    id: 1,
    name: 'Flavio',
  },
  {
    id: 2,
    name: 'Federico',
  },
];

const user3 = {
  id: 3,
  name: 'Filippo',
};

const reducerMethod = (users: any, action: any) => {
  switch (action.type) {
    // State updates here

    case 'addUser': {
      return [...users, action.newUser];
    }

    //Now, for the delete operation, the dispatch method passes only the id of the object so that the state array can filter it out
    case 'deleteUser': {
      return users.filter((user: any) => user.id !== action.id);
    }

    default: {
      // Handle error here
    }
  }

  //The type field contains the name of the operation to be performed. This is a string and you can set any value you want.

  //The logic for updating state is similar to setState. Here, you return a new state value rather than making changes to the state variable directly.
};

export default function App() {
  const [state, dispatch] = useReducer(reducerMethod, initialState);
  return (
    <>
      {state.map((user: any) => (
        <div className="my-2" key={user.id}>
          <p className=" inline mr-2">{user.name}</p>
          <button onClick={() => dispatch({ type: 'deleteUser', id: user.id })}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: 'addUser', newUser: user3 })}>
        Add user
      </button>
    </>
  );
}
```

- We can add a new user, delete an existing user, and update user details. Normally, we would create a state variable user and perform state updates at different places.Let's try doing the same using reducers:

## Example

```js
import { useReducer } from 'react';

const initialState = { count: 0 };
// The reducer function
function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
```
