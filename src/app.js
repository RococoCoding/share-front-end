import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Route path='/'>
          <p>hi</p>
        </Route>
      </div>
    )
  }
}

export default App;
