import * as React from 'react';

export const Home = React.lazy(() => import('./Home'));
export const Admin = React.lazy(() => import('./admin/Admin'));
export const Jobs = React.lazy(() => import('./admin/Jobs'));
export const Customers = React.lazy(() =>
  import('./admin/Customers')
);
export const Employees = React.lazy(() =>
  import('./admin/Employees')
);
