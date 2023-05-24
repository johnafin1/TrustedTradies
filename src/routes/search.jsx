import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import Services from "../plugins/services";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Search() {
  let services = Services.sort((a, b) => a.label.localeCompare(b.label));
  const [service, setService] = useState(null);

  const [filter, setFilter] = useState("");
  const handleFilterSet = (e) => {
    setFilter(e.target.value);
  };

  const navigate = useNavigate();

  function handleGotoResults() {
    navigate("/results");
  }

  if (service == null) {
    return (
      <>
        <Container className="mt-4">
          <Row>
            <Col>
              <div className="text-title">Step 1: Select Service Category</div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}></Col>
            <Col md={6}>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
                <Form.Control
                  aria-describedby="basic-addon1"
                  type="text"
                  placeholder="Search services..."
                  onChange={handleFilterSet}
                />
              </InputGroup>
            </Col>
            {services
              .filter(
                (el) =>
                  el.label.includes(filter) || el.description.includes(filter)
              )
              .map((el) => (
                <Col md={3} key={el.label}>
                  <Card className="mb-4 fill-height">
                    <Card.Img
                      style={{ height: "205px" }}
                      variant="top"
                      src={el.img}
                    />
                    <Card.Body>
                      <Card.Title className="text-capitalize">
                        {el.label}
                      </Card.Title>
                      <Card.Text style={{ minHeight: "48px" }}>
                        {el.description}
                      </Card.Text>
                      <Button onClick={() => setService(el)} variant="primary">
                        Select
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container className="mt-4">
          <Row className="mb-4">
            <Col>
              <div className="text-title">Step 2: Complete Service Request</div>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Service Title
                </div>
              </Col>
              <Col md={10}>
                <InputGroup className="mb-4">
                  <Form.Control
                    disabled
                    readOnly
                    type="text"
                    value={service.label}
                    className="text-capitalize"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Service Description
                </div>
              </Col>
              <Col md={10}>
                <InputGroup className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    disabled
                    readOnly
                    type="text"
                    value={service.description}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Service TimeFrame
                </div>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label>From</Form.Label>
                  <InputGroup className="mb-4">
                    <Form.Control type="datetime-local" />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label>Until</Form.Label>
                  <InputGroup className="mb-4">
                    <Form.Control type="datetime-local" />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Max Budget
                </div>
              </Col>

              <Col md={5}>
                <Form.Group>
                  <InputGroup className="mb-4">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Post Code
                </div>
              </Col>

              <Col md={5}>
                <Form.Group>
                  <InputGroup className="mb-4">
                    <Form.Control type="number" />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Button variant="outline-primary">Use My Address</Button>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <div
                  className="col-form-label fw-bold"
                  style={{ fontSize: "1.25rem" }}
                >
                  Describe the Job
                </div>
              </Col>
              <Col md={10}>
                <InputGroup className="mb-4">
                  <Form.Control as="textarea" rows={3} type="text" />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card>
                  <Row>
                    <Col md={6}>
                      <img
                        src="https://www.seocopilot.com.au/wp-content/uploads/marketing-for-tradies-e1560607944811.jpg"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      ></img>
                    </Col>
                    <Col
                      md={6}
                      className="p-5 d-flex flex-column justify-content-center "
                    >
                      <div className="text-title mb-2">
                        📣 Get unlimited callouts with a Trusty Trade
                        Membership!
                      </div>
                      <div className=" mb-2">
                        For just $xx.xx a month, a Trusty Trade Membership
                        provides affordable access to trades (billed annually).
                      </div>

                      <Button className=" mb-2">Learn More</Button>
                      <div style={{ fontSize: "0.75rem" }}>
                        T&Cs apply. Not everywhere and not forever.
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}></Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <Button size="lg" onClick={handleGotoResults}>
                  Check Available Professionals
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}
