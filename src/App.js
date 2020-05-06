import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import MyRouter from "./components/Pages/Router";
import Navbar from "./components/Pages/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux'
import { reducers} from './reducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({ trace: true, traceLimit: 50 })|| compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

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