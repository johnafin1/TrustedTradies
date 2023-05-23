import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

// import { ui, uiConfig } from "../index";
// ui.start("#firebaseui-auth-container", uiConfig);

import { Outlet } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  function gotoMemberSignup() {
    navigate("signup/member");
  }

  function gotoProfessionalSignup() {
    navigate("signup/professional");
  }

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <div id="firebaseui-auth-container"></div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="home">
              <img
                alt="Trust Trade Logo"
                src={require("../assets/tt_logo_simple.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Trusty Trade
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto, justify-content-end">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/login">Login/Signup</Nav.Link>
              </Nav>
              <Button
                size="sm"
                variant="outline-success"
                style={{ marginRight: "8px" }}
                onClick={gotoMemberSignup}
              >
                Become a Member
              </Button>{" "}
              <Button
                size="sm"
                variant="outline-warning"
                onClick={gotoProfessionalSignup}
              >
                Register a Professional
              </Button>{" "}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="detail">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}
