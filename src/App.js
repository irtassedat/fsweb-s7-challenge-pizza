// App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPizzaPage from './pages/OrderPizzaPage';
import './App.css';
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/options"/>
        <Route path="/pizza" component={OrderPizzaPage} />
        <Route path="/success" exact component={SuccessPage} />
      </Router>
  );
};

export default App;