import React from 'react';
import { Footer } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export function FooterNav() {
  return (
    <>
      <div className="mt-10">
        <Footer container={true}>
          <Footer.Copyright
            href="#"
            by="Wright &amp; Morrow™"
            year={2022}
          />
          <Footer.LinkGroup>
            <Footer.Link><NavLink to="/login">Login</NavLink></Footer.Link>
            <Footer.Link><NavLink to="/register">Register</NavLink></Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
            <Footer.Link><NavLink to="/admin">Admin</NavLink></Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </>
  );
}
