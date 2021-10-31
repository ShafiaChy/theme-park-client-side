import React from 'react';
import { Container, Nav,Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user,logOut } = useAuth();
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-bg">
            <Container className="py-3">
                <Navbar.Brand href="#home">Thorpe Park</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className="text-white mt-2 ms-3 text-decoration-none" to="/home" href="#features">Home</NavLink>
                    <NavLink className="text-white mt-2 ms-3 text-decoration-none" to="/about" href="#pricing">Park Info</NavLink>
               
                    {
                            user.email ?
                            <NavLink className="text-white mt-2 ms-3 text-decoration-none" to="/my-order" href="#pricing">My Order</NavLink> 
                            :
                            <NavLink to=""></NavLink>
                        }
                        {
                          user.email ?
                         
                            <NavLink className="text-white mt-2 ms-3 text-decoration-none" to="/add-service" href="#pricing">Add A New Service</NavLink> 
                            :
                            <NavLink to=""></NavLink>
                        }
                        {
                            user.email ?
                           
                            <NavLink className="text-white mt-2 ms-3 text-decoration-none" to="/manage-all-users" href="#pricing">Manage All Users</NavLink>
                            :
                            <NavLink to=""></NavLink>
                        }
                   
                  
                    </Nav>
                    
                    <Nav>
                    <span className="text-white me-2 mb-2 mt-2">{user.displayName}</span>
                        {
                            user.email ? 
                            <button className="rounded py-2 px-3  py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
                            :
                            <NavLink className="text-decoration-none text-white" to='/login' href="#deets">Login</NavLink>  
                        }
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;