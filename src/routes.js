import React from 'react';
import { renderRoutes } from 'react-router-config';
import Example from './views/Example';
import Home from './views/Home';

const Routes = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Home
    },
    {
      path: '/example',
      component: Example,
    }
  ];

  return renderRoutes(routes);
};

export default Routes;
