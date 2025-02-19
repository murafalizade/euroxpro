import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
// import {areas} from "../service/constants.ts";
import { Analytics } from "@vercel/analytics/react"


const CustomNavbar = () => {
    const [navbarBg, setNavbarBg] = useState("navbar-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg("navbar-black");
            } else {
                setNavbarBg("navbar-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <Navbar expand="lg" fixed="top" className={`custom-navbar ${navbarBg}`}>
            <Container fluid className={'p-3 mx-4'}>
                <Navbar.Brand href="/">
                    <img src="/euroxpro.png" alt="Brand Logo" height={'50'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="mx-3">Home</Nav.Link>
                        <Nav.Link href="/merch" className="mx-3">Merch</Nav.Link>
                        <Nav.Link href="/" className="mx-3">Agenda</Nav.Link>
                        <Nav.Link href="/delegate-positions" className="mx-3 d-block d-md-none">Delegates</Nav.Link>
                        {/*<NavDropdown title="Delegates" id="delegates-dropdown" className="mx-3 d-none d-md-block">*/}
                        {/*    <NavDropdown.Item href={`/delegates`}>All</NavDropdown.Item>*/}
                        {/*    {areas.map(x=> (*/}
                        {/*        <NavDropdown.Item key={x}  href={`/delegates?position=${x}`}>{x}</NavDropdown.Item>*/}
                        {/*    ))}*/}
                        {/*</NavDropdown>*/}
                        <Nav.Link href="/cc" className="mx-3">CC Team</Nav.Link>
                        <NavDropdown title="Help" id="help-dropdown" className="mx-3">
                            <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
                            <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Analytics />
        </Navbar>
    );
};

export default CustomNavbar;
