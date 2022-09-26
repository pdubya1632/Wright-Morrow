import React from 'react';
import { Footer } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export function FooterNav() {
    return (
        <>
            <div className='mt-10'>
            <Footer container={true}>
            <Footer.Copyright
                href="#"
                by="Wright &amp; Morrow™"
                year={2022}
            />
            <Footer.LinkGroup>
                <Footer.Link href="/login">
                Login
                </Footer.Link>
                <Footer.Link href="/register">
                Register
                </Footer.Link>
                <Footer.Link href="#">
                Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                Licensing
                </Footer.Link>
                <Footer.Link href="/contact">
                Contact
                </Footer.Link>
                <Footer.Link href="/services" ><NavLink to="/admin">Admin</NavLink></Footer.Link>
            </Footer.LinkGroup>
            </Footer>
            </div>
        </>
    )
};