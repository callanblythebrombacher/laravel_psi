import React, {useState} from 'react';
import {Navbar, Nav, Button, Offcanvas} from 'react-bootstrap'
import logo from "/images/logo.png"
import {Link} from "react-router-dom";
import {isMobile, isTablet} from "react-device-detect";
import VerticallyCenteredModal from "./modal.component";

export default function Header(){
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [isLogin, setIsLogin] = useState(false)

    const handleClose = () => {setShow(false); setModalShow(true)};
    const handleShow = () => setShow(true);


return (
    isMobile===true || isTablet ===true ? (<div>
        <Navbar bg="light" expand="lg">
            <img src={logo} alt="" height={300} width="auto"/>
            <Button variant="primary" onClick={handleShow}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="nav">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll>
                            <Link className="route" to="/"><Nav.Link onClick={()=>{handleClose(); setIsLogin(false) }}>Signup</Nav.Link></Link>
                            <Link className="route" to="/"><Nav.Link onClick={()=>{handleClose(); setIsLogin(true) }}>Login</Nav.Link></Link>
                        </Nav>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
        <VerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            content=''
        />
        </div>):(
        <div>
            <Navbar bg="light" expand="lg">
                    <img src={logo} alt="" height={100} />
                    <div className="nav">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Link className="route" to="/"><Nav.Link onClick={()=>{setIsLogin(false); setModalShow(true)}}>Signup</Nav.Link></Link>
                                <Link className="route" to="/"><Nav.Link onClick={()=>{setIsLogin(true); setModalShow(true)}}>Login</Nav.Link></Link>
                            </Nav>
                    </div>
            </Navbar>
            <VerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                content=''
                isLogin={isLogin}
            />
    </div>)
    )
}
