import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';
import { ReactComponent as Logo } from "../../images/wm-logo.svg";

export function TopNav() {
    return (
        <>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                <Logo width={200} />

                </Navbar.Brand>
                <div className="flex md:order-2">
                <Button>Request A Quote</Button>
                <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link href="/navbars" active={true}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};