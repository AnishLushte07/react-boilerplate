import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import OneComponent from './one';


const routes = [
  {
    path: 'one',
    component: OneComponent,
  }
];

class NestedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.match.url;
  }

  render() {
    return (
      <>
        <Switch>
          {routes.map((route, i) => {
            let path = `${this.url}/${route.path}`;
            return (
              <Route
                exact
                key={i}
                path={path}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
          <Route render={() => <Redirect to="/nested/one" />} />
        </Switch>
      </>
    );
  }
}

export default NestedComponent;
