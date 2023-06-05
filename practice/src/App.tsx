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
