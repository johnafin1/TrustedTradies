import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export default function SignUp() {
  return (
    <>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6}>
            <div style={{ textAlign: "center" }}>
              <img src={require("../assets/tt_logo.png")} alt="tt logo" />
            </div>
            <div style={{ textAlign: "center" }} className="mb-5">
              <span className="text-title">Member Sign Up</span>
            </div>
            <Form>
              <Row>
                <Col md={12}>
                  <Alert>
                    Already have an account? <Alert.Link>login now.</Alert.Link>{" "}
                  </Alert>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
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
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms and Conditions"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Button variant="primary" type="submit">
                    Continue
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
