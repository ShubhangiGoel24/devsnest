import React from 'react';
import { Route, Switch } from 'react-router';
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";

const App = () => {
  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
    </Switch>
    </>
  );
};
export default App;