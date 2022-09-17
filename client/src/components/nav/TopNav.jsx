import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';
import { ReactComponent as Logo } from "../../images/wm-logo.svg";

export function TopNav() {
    return (

            
            <div className='mb-10'>
            <Navbar fluid={true} rounded={true} container={true}>
                <Navbar.Brand href="/">
                <Logo width={200} />
                </Navbar.Brand>

                <div className="flex md:order-2">
                <Button>  <Link to="/login">Login</Link></Button>
                <Button>  <Link to="/register">Register</Link></Button>
                <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link href="/">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/admin/jobs">Jobs</Navbar.Link>
                <Navbar.Link href="/admin/customers">Customers</Navbar.Link>
                <Navbar.Link href="/admin/items">Items</Navbar.Link>
                <Navbar.Link href="/admin/jobs">Jobs</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </div>
        
    )
};