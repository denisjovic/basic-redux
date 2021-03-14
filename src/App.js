import { useSelector, useDispatch } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  logInAction,
  logOutAction,
} from './actions';

function App() {
  // extract the desired part of state from the global state
  const counter = useSelector((state) => state.CounterReducer);
  const loggedIn = useSelector((state) => state.loggedReducer);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div className='logIn'>
        <button onClick={() => dispatch(logInAction())}>Log in</button>
        <button onClick={() => dispatch(logOutAction())}>Log out</button>
      </div>
      <div className='counter'>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
        <h2>Counter {counter}</h2>
      </div>
      {loggedIn ? (
        <h1>Some sensitive data</h1>
      ) : (
        <h1>Nothing to see, move along</h1>
      )}
    </div>
  );
}

export default App;
