import React, { useState } from 'react';
import "../NavBar/Header.css";
import { RiMenu2Fill } from "react-icons/ri";

import ExpertiesData from "../../Asserts/ExpertiesData";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Drawer } from 'antd';
import Logo from "../../Images/logo/Kreeze Design Studio.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    
    const showDrawer = () => {
        setOpen(true);
    };
    
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
        
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >
                        <Link to='/'>
                        <div className='navbar-Logo-con'>
                            <img src={Logo} alt='Logo' />
                        </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link to="/"><Link to='/'>Home</Link></Nav.Link> */}
                            <Nav.Link to="/portfolio" aria-controls="responsive-navbar-nav"><Link to="/portfolio">Portfolio</Link></Nav.Link>
                            {/* <NavDropdown title="Experties" id="collapsible-nav-dropdown">
                                {ExpertiesData.map((v,i)=>{
                                    return(
                                        <NavDropdown.Item key={i} to={v.slug}>
                                            <Link to={v.slug}>{v.titleName}</Link>
                                        </NavDropdown.Item>
                                    )
                                })}
                            </NavDropdown> */}
                            <Nav.Link to="/experties" aria-controls="responsive-navbar-nav"><Link to='/experties'>Experties</Link></Nav.Link>
                            <Nav.Link to="/the-studio" aria-controls="responsive-navbar-nav"><Link to='/the-studio'>The Studio</Link></Nav.Link>
                            {/* <Nav.Link to="/design-element"><Link to='design-element'>Design elements</Link></Nav.Link> */}
                            {/* <Nav.Link to="/blog"><Link to="/blog">Blog</Link></Nav.Link> */}
                            <Nav.Link to="/careers"><Link to="/careers">Careers</Link></Nav.Link>
                            <Nav.Link to="/contactUs"><Link to="/contactUs">Contact</Link></Nav.Link>
                        </Nav>
                        {/* <Nav>
                            <div className='NavBar-Side-Drawer-con'>
                                <div className='NavBar-Side-Drawer' onClick={showDrawer}>
                                    <RiMenu2Fill />
                                </div>
                            </div>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
