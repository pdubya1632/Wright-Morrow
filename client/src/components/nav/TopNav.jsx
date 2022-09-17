import React from 'react';
// import { Link } from 'react-router-dom';
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
                <Button>Request A Quote</Button>
                <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link href="/">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/quote" active={true}>Quote</Navbar.Link>
                <Navbar.Link href="/services">Services</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </div>
        
    )
};