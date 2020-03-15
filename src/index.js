import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';

const Layout = () => {

  return(
    <Router>
      <Container>
        <Route exect path="/" component={Home} />
      </Container>
    </Router>
  )
}

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
