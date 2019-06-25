import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Posts from './components/Posts';

const App = props => {
  return (
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;
