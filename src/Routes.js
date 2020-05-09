import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import FourNotFour from './Components/FourNotFour';
import Recipe from './Components/Recipe';
import Resources from './Components/Resources';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:categoryId" component={Recipe} />
      <Route path="/resources" component={Resources} />
      <Route path="*" component={FourNotFour} />
    </Switch>
  </Router>
);

export default Routes;
