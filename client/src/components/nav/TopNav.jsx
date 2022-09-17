import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';

export function TopNav() {
    return (
        <>
            <div className="h-50 bg-slate-50">
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                {/* <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Wright &amp; Morrow"
                /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Wright &amp; Morrow
                </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                <Button>  <Link to="/login">Login</Link></Button>
                <Button>  <Link to="/register">Register</Link></Button>
                <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link href="/navbars" active={true}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/admin/jobs">Jobs</Navbar.Link>
                <Navbar.Link href="/admin/customers">Customers</Navbar.Link>
                <Navbar.Link href="/admin/items">Items</Navbar.Link>
                <Navbar.Link href="/admin/jobs">Jobs</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};