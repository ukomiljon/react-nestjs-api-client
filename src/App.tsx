import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer/Reducer';
import Datasources from './Components/Datasources';
import Users from './Components/Users';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Datasources />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
