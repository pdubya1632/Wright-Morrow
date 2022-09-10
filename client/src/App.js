import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Home, Admin, Customers, Jobs, Login } from './pages/index';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
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

            <Route
              path="/admin"
              element={<React.Suspense children={<Admin />} />}
            />

            <Route
              path="/admin/customers"
              element={<React.Suspense children={<Customers />} />}
            />

            <Route
              path="/admin/jobs"
              element={<React.Suspense children={<Jobs />} />}
            />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
