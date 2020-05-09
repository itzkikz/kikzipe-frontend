import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home'));
const FourNotFour = lazy(() => import('./Components/FourNotFour'));
const Recipe = lazy(() => import('./Components/Recipe'));
const Resources = lazy(() => import('./Components/Resources'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:categoryId" component={Recipe} />
        <Route path="/resources" component={Resources} />
        <Route path="*" component={FourNotFour} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
