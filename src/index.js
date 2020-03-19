import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import DimensionFilters from './components/dimensionFilters';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const Layout = () => {

  return(
    <Provider store={store}>
      <DimensionFilters />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/images/:id" component={Home} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
