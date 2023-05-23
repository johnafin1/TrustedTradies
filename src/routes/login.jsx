import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function gotoMemberSignup() {
    navigate("/signup/member");
  }

  function gotoProfessionalSignup() {
    navigate("/signup/professional");
  }

  return (
    <>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6}>
            <div style={{ textAlign: "center" }}>
              <img src={require("../assets/tt_logo.png")} alt="tt logo" />
            </div>
            <div style={{ textAlign: "center" }} className="mb-5">
              <span className="text-title">Login</span>
            </div>

            <Form>
              <Row>
                <Col md={12}>
                  <Alert>
                    Need an account?{" "}
                    <Alert.Link onClick={gotoMemberSignup}>
                      signup now
                    </Alert.Link>{" "}
                    or{" "}
                    <Alert.Link onClick={gotoProfessionalSignup}>
                      register as a professional.
                    </Alert.Link>
                  </Alert>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username or Email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                      Trusty Trade will never ask for your password
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
