import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

 const Navigation = () => {
    return(
      <div>
        <Navbar className="px-5" color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">earlybird.io</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Product Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cart">My Cart</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
}

export default Navigation;
