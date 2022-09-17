import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home, Admin, Login, Register, AddJobForm, AddItemForm } from './pages/index';

export default function App() {
  return (
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

        <Route
          path="/register"
          element={<React.Suspense children={<Register />} />}
        />
        <Route
          path="/admin/*"
          element={<React.Suspense children={<Admin />} />}
        />

        <Route
          path="*"
          element={<h1 className="display-2">Wrong page!</h1>}
        />
      </Routes>
    </>
  );
}
