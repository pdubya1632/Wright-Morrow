import { Navbar, Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/wm-logo.svg';
import { NavLink } from 'react-router-dom';

export function TopNav() {
  return (
    <div className="mb-10">
      <Navbar fluid={true} rounded={true} container={true}>
        <Navbar.Brand href="/">
          <Logo width={200} />
        </Navbar.Brand>

        <div className="flex space-x-6 md:order-2">
          <Button ><NavLink to="/login">Login</NavLink></Button>
          <Button ><NavLink to="/register">Register</NavLink></Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>

          <Navbar.Link href="/quote-request" use active={true}>
            Quote
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}