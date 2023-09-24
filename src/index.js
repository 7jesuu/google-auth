import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
</Router>
);

