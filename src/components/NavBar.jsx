import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
/* import logo from '../images/favicon.svg' */
import { Link } from "react-router-dom";
import s from '../styles/navbar.module.css'
import b from '../styles/button.module.css'
import l from '../styles/link.module.css'

export const NavBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-0" sticky='top' id={s.container}>
          <Container>
            <Navbar.Brand href="/"><img src="https://res.cloudinary.com/dbvh03usi/image/upload/v1674259433/Torres%20Construction/logo1.svg" alt="" width="150"/></Navbar.Brand>
            <Navbar.Toggle  className={s.button_main} aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={s.button_close}>
                <p>
                  Developed by <img className={s.logo_gales} src="https://res.cloudinary.com/dbvh03usi/image/upload/v1674575152/Gales/logo3.svg" height="20rem" padding="0" alt="logo" />
                </p>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" id={s.nav_content}>
                  <Link to={"/"}>
                    <button className={l.button} style={{color:'var(--text-color)', width: "5rem"}}>Home</button>
                  </Link>
                  <Link to={"/services"}>
                  <button className={l.button} style={{color:'var(--text-color)', width: "5rem"}}>Services</button>
                  </Link>
                  <Link to={"/galery"}>
                  <button className={l.button} style={{color:'var(--text-color)', width: "5rem"}}>Galery</button>
                  </Link>
                  <button className={b.button1} href="tel:+51997183462"> Call us </button>
                  
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}