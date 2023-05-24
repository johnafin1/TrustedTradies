import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  function gotoLogin() {
    navigate("/login");
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
              <span className="text-title">Professional Registration</span>
            </div>
            <Form>
              <Row>
                <Col md={12}>
                  <Alert>
                    Already have an account?{" "}
                    <Alert.Link onClick={gotoLogin}>login now.</Alert.Link>{" "}
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
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>ABN</Form.Label>
                    <Form.Control type="text" placeholder="ABN" />
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
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Credit Card Number"
                    />
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
                <Col className="my-4">
                  <Card border="primary">
                    <Card.Body>
                      <Card.Title>Become a Member</Card.Title>
                      <Card.Text>
                        Enjoy simplicity and predictability with the Trusty
                        Trade Membership Program. Avoid piecework comission for
                        just $32.00 per month. Billed anually.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Become a member now"
                      />
                      <div>
                        You can choose to become a member at any time after the
                        signup processs
                      </div>
                    </Card.Footer>
                  </Card>
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
