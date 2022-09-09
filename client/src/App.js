import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const client = new ApolloClient({
    request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
        headers:{
        authorization: token ? `Bearer ${token}` :"",
        }
    });
    },
    uri: "graphql",
    });

function App() {
    return (
        <ApolloProvider client={client}>
        <Router>
            <>
            {/* <Navbar /> */}
            <Routes>        
            <Route path="/" element={<Home />}></Route>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Routes>
            </>
        </Router>
        </ApolloProvider>
    );
}

export default App; 