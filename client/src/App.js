import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import { Home, Admin, Customers, Jobs, Login } from './pages/index';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

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
