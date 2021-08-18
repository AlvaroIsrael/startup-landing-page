import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from 'pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Landing} />
  </Switch>
);

export default Routes;
