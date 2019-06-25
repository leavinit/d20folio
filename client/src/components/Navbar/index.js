import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to='/'>Home</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/mychars'>My Character</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/add'>Add New Character</Link>
                    </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}