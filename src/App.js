import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import MyRouter from "./Pages/Router";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import root from './reducers';

const store = createStore(root);

const state = store.getState();

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Navbar />
        <MyRouter />
      </Router>
    </Provider>
    </div>
  );
}

export default App;