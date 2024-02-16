import { Nav, Navbar, Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';


const NavigationBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <Navbar expand="lg" className="bg-dark navbar-dark fw-bold shadow-sm fixed-top">
                <Container>
                    <Navbar.Brand href="/#">Nexblu API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className={`${currentPath === '/' ? 'text-light' : ''}`}>Home</Nav.Link>
                            <Nav.Link href="/documentation" className={`${currentPath === '/documentation' ? 'text-light' : ''}`}>Documentation</Nav.Link>
                            <Nav.Link href="/contact" className={`${currentPath === '/contact' ? 'text-light' : ''}`}>Contact</Nav.Link>
                            <Nav.Link href="/donation" className={`${currentPath === '/donation' ? 'text-light' : ''}`}>Donation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
