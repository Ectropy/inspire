import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';

class NavBarHeader extends Component {
	render () {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<button>Sign in</button>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBarHeader;
