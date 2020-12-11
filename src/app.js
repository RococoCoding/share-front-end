import React from 'react';
import { Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <Nav />
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/Dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </>
    )
  }
}

export default App;
