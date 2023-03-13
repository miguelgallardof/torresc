import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
/* import logo from '../images/favicon.svg' */
import { NavLink } from "react-router-dom";
import s from '../styles/navbar.module.css'
import b from '../styles/button.module.css'
import l from '../styles/link.module.css'

export const NavBar = () => {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-0" sticky='top' id={s.container}>
          <Container>
            <Navbar.Brand href="/"><img src="https://res.cloudinary.com/miguelgallardof/image/upload/v1674635160/Torres%20Construction/logo1.svg" alt="" width="150"/></Navbar.Brand>
            <Navbar.Toggle  className={s.button_main} aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={s.button_close}>
                <p className={s.text_light}>
                  Developed by <img className={s.logo_gales} src="https://res.cloudinary.com/miguelgallardof/image/upload/v1674575152/Gales/logo3.svg" height="20rem" padding="0" alt="logo" />
                </p>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" id={s.nav_content}>
                  <NavLink to={"/"} className={l.button} style={{color:'var(--text-color)', width: "5rem"}} activeClassName='active'>
                    Home
                  </NavLink>
                  <NavLink to={"/about"} className={l.button} style={{color:'var(--text-color)', width: "5rem"}} activeClassName='active'>
                    About
                  </NavLink>
                  <NavLink to={"/services"} class='nav' className={l.button} style={{color:'var(--text-color)', width: "5rem"}} activeClassName='active'>
                  Services
                  </NavLink>
                  <NavLink to={"/gallery"} className={l.button} style={{color:'var(--text-color)', width: "5rem"}} activeClassName = 'active'>
                  Gallery
                  </NavLink>
                  <NavLink to={"/contact"} className={l.button}  
                  style={{color:'var(--text-color)', width: "5rem"}} activeClassName='active'>
                  Contact
                  </NavLink>
                  <a href="tel:+17042775688">
                    <button className={b.button1}> Call us </button>
                  </a>
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