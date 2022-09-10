import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Home, Login, Admin } from './pages/index';

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            index
            element={<React.Suspense children={<Home />} />}
          />

          <Route
            path="/login"
            element={<React.Suspense children={<Login />} />}
          />

          {/* if logged in */}
          <Route
            path="/admin"
            element={<React.Suspense children={<Admin />} />}
          />

          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}
