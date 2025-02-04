import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

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

    const areas = ['LCVP oGV', 'LCVP oGT', 'LCP', 'LCVP iGT', 'MCVP oGV', 'MCVP oGT', 'MCVP iGT', 'MCP/MCPe', 'MCVP MKT', 'LCVP MKT']

    return (
        <Navbar expand="lg" fixed="top" className={`custom-navbar ${navbarBg}`}>
            <Container fluid className={'p-3 mx-4'}>
                <Navbar.Brand href="#">
                    <img src="/euroxpro.png" alt="Brand Logo" height={'50'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#" className="mx-3">Merch</Nav.Link>
                        <NavDropdown title="Delegates" id="delegates-dropdown" className="mx-3">
                            {areas.map(x=> (
                                <NavDropdown.Item className={'text-center'} href="#">{x}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href="#" className="mx-3">CC Team</Nav.Link>
                        <NavDropdown title="Help" id="help-dropdown" className="mx-3 text-center">
                            <NavDropdown.Item href="#">Resources</NavDropdown.Item>
                            <NavDropdown.Item href="#">Feedback</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
