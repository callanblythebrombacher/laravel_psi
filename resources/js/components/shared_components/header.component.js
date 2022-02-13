import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import logo from "/images/logo.png"
import {Link} from "react-router-dom";


export default function Header(){
    return(

    <div>
            <Navbar bg="light" expand="lg">
                    <img src={logo} alt=""  />
                    <div className="nav">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Link className="route" to="/"><Nav.Link>Home</Nav.Link></Link>
                                <Link className="route" to="/"><Nav.Link>Login</Nav.Link></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
    </div>
    )
}
