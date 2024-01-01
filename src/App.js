import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <div className='btn-actions'>
          <button
            onClick={() => dispatch(increment())}
          >increase</button>
          <button
            onClick={() => dispatch(decrement())}
          >decrease</button>
        </div>

        <br></br>
        <div>count = {count}</div>
      </header>
    </div>
  );
}

export default App;
