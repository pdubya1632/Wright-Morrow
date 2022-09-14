import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Home, Admin, Login, Homepage, Register } from './pages/index';
import Jobs from './components/admin/Jobs';

export default function App() {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Routes>
                <Route path="/home" element={<Homepage />} />
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
                    path="/admin"
                    element={<React.Suspense children={<Admin />} />}
                />

                <Route
                    path="/admin/customers"
                    element={<React.Suspense children={<Admin />} />}
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
    );
}
