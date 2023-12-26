import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

import logo from "../assets/navbar/logo.svg";
import flight from "../assets/navbar/flight.svg";
import stays from "../assets/navbar/stays.svg";

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" className="p-4 navfont ">
      <Container fluid className="nav-flex">
        <div className="d-flex flight-nav">
          <Nav.Link href="#action1" className="flight-img-logo">
            <Image src={flight} alt="flight" /> Find Flight
          </Nav.Link>
          <Nav.Link href="#action2">
            <Image src={stays} alt="stays" /> Find Stays
          </Nav.Link>
        </div>
        <Navbar.Brand href="#">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="responsive-flight">
            <Nav.Link href="#action1" className="flight-img-logo my-4">
              <Image src={flight} alt="flight" /> Find Flight
            </Nav.Link>
            <Nav.Link href="#action2">
              <Image src={stays} alt="stays" /> Find Stays
            </Nav.Link>
          </div>
          <Button className="Login   my-2">Login</Button>
          <Button className="Signup">Sign up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
