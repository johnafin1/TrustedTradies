import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Services from "../plugins/services";

export default function Search() {
  let services = Services;
  services = services.sort((a, b) => a.label - b.label);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <div className="text-title">Step 1: Select Service Category</div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Search services..."
            />
          </Col>
          {services.map((el) => (
            <Col md={3}>
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
                  <Button variant="primary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
