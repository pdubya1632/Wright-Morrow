import * as React from 'react';

export const Home = React.lazy(() => import('./public/Home.jsx'));
export const Customers = React.lazy(() =>
  import('./admin/Customers.js')
);
export const Jobs = React.lazy(() => import('./admin/Jobs.js'));
