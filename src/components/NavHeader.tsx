import React, { ReactElement } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Brand } from 'components/Navbar';

const navLinks = ['Music', 'Bio', 'Contact', 'Photos', 'Press'];

const NavHeader = (): ReactElement => (
  <Navbar bg="dark" variant="dark">
    <Brand to="/">Home</Brand>
    <Nav>
      {navLinks.map(page => (
        <NavLink key={page} to={`/${page.toLowerCase()}`}>
          {page}
        </NavLink>
      ))}
    </Nav>
  </Navbar>
);

export default NavHeader;
