import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './redux/slices/counterSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  const listUsers = useSelector((state) => state.user.listUsers)
  const isLoading = useSelector((state) => state.user.isLoading)
  const isError = useSelector((state) => state.user.isError)

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [])

  if (isError === true && isLoading === false) {
    return (
      <div>Something wrongs, please try again!</div>
    )
  }

  if (isError === false && isLoading === true) {
    return (
      <div>Loading data...</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world</h1>
        <div className='btn-actions'>
          <button
            onClick={() => dispatch(increment())}
          >increase</button>
          <button
            onClick={() => dispatch(decrement())}
          >decrease</button>
        </div>

        <br></br>
        <div>count = {count}</div> */}
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
