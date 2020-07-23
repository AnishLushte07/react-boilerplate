import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { StateProvider } from './store/store';
import NestedComponent from './module/nested';
import LoginComponent from './module/login';

function App() {
  return (
    // <StateProvider>
    <Switch>
      <Route exact path="/login" component={LoginComponent} />
      <Route path="/nested" component={NestedComponent} />
      {/* <PrivateRoute path="/nested" component={NestedComponent} /> */}
      <Route
        render={() => (
          <Redirect
            to="/login"
          />
        )}
      />
    </Switch>
    // </StateProvider>
  );
}

export default App;
