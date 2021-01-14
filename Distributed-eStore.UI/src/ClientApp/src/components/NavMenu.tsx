import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { isUserLoggedIn } from "../services/auth";
import { store } from "../index";
import CartWidget from './cart/cartWidget/CartWidget';
import { userActionCreators } from '../state/user/userActions';

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    private onLogout() {
        { /* technical debt - consider connecting NavMenu to Redux */ }
        userActionCreators.logout()(store.dispatch, store.getState);
    }

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">DistributedEStore.UI</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">

                                { /* technical debt - abstract this */ }
                                {!isUserLoggedIn() &&
                                    <>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
                                        </NavItem>
                                    </>
                                }

                                { isUserLoggedIn() && <NavItem>
                                    <NavLink tag={Link} to="/login" onClick={ this.onLogout } className="text-dark">Logout</NavLink>
                                </NavItem>}

                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/cart">
                                        <CartWidget />
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}