import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Posts from './components/posts';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/" component={Home}/>
      </Switch>
    )

    return (
      <Fragment>
        {routes}
      </Fragment>
    );
  }
}

export default App;
