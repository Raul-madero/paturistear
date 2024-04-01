import { Container, Image, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"


const Header = () => {
    const logo = "https://i.ibb.co/DRhxdbr/logo.png"
    return (
        <Container className="navegacion overflow-hidden">
            <Navbar expand="md" className="navbar-light">
                <Container>
                    <NavbarBrand href="/" className="text-light align-text-center fs-2">
                        <Image 
                            src={logo}dark
                            alt="Logo paTuristear"
                            width={80}
                            height={80}
                            className="d-inline-block align-center me-2"
                        />
                        PaTuristear 
                    </NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar" className="border border-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </NavbarToggle>
                    <NavbarCollapse id="basic-navbar">
                        <Nav className="ms-auto me-2"> 
                            <NavLink href="/" className="text-light">Mis Rutas</NavLink>
                            <NavLink href="/" className="text-light">Administrar</NavLink>
                            <NavLink href="/" className="text-light">Iniciar Sesion</NavLink>
                            <NavLink href="/" className="text-light">Usuario</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header