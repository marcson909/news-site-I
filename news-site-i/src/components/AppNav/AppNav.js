import React from 'react';
import Nav from 'react-bootstrap/Nav'

 const AppNav = (props) => {

    const displayNavItems = () => {
    return props.navItems.map((item, index) => {
      return (
        <Nav.Link href="#" key={index} value={item['value']} onClick={() => props.handleNavClick(item['value'])}>{item['label']}</Nav.Link>
      )
    })
   }

    return (
          <Nav className="me-auto">
            {displayNavItems()}
          </Nav>
    )
  }

export default AppNav;
