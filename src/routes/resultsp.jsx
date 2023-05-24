import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Image,
} from "react-bootstrap";

import Services from "../plugins/services";

export default function Results() {
  let services = Services;
  let randomservices = [];
  for (let index = 0; index < 25; index++) {
    const random =
      services[Math.floor(Math.random() * (services.length - 1 - 0 + 1) + 0)];
    randomservices.push({
      label: random.label,
      img: random.img,
    });
  }

  return (
    <>
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <div className="text-title">Available Jobs</div>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className="mb-4">
                <Row>
                  <Col md={4}>
                    <InputGroup>
                      <InputGroup.Text>Sort By</InputGroup.Text>
                      <Form.Select>
                        <option>Name (First)</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup>
                      <InputGroup.Text>Max Price</InputGroup.Text>
                      <Form.Select>
                        <option>None</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup>
                      <InputGroup.Text>Min Rating</InputGroup.Text>
                      <Form.Select>
                        <option>1 star</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              {randomservices.map((el) => (
                <Col md={12} className="mb-3" key={el.img}>
                  <Row>
                    <Col>
                      <Image
                        style={{
                          height: "200px",
                          width: "270px",
                          objectFit: "cover",
                        }}
                        thumbnail
                        src={el.img}
                      ></Image>
                    </Col>
                    <Col>
                      <div
                        className="text-title text-capitalize"
                        style={{ fontSize: "1.5rem" }}
                      >
                        {el.label}
                      </div>
                      <div style={{ fontSize: "0.8rem" }} className="mb-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid, iusto. Temporibus doloremque earum non
                        ipsa modi fuga natus...
                      </div>
                      <div
                        className="text-title"
                        style={{ fontSize: "1.15rem", fontWeight: "normal" }}
                      >
                        Customer: John Smith
                      </div>
                      <div
                        className="text-title"
                        style={{ fontSize: "1.15rem", fontWeight: "normal" }}
                      >
                        Location: Near you
                      </div>
                      <div
                        className="text-title"
                        style={{ fontSize: "1.15rem", fontWeight: "normal" }}
                      >
                        Languages: Eng
                      </div>
                      <div
                        className="text-title"
                        style={{ fontSize: "1.15rem", fontWeight: "normal" }}
                      >
                        Rating: {[...Array(el.rating)].map((x, i) => "⭐")}
                      </div>
                    </Col>
                    <Col className="d-flex flex-column">
                      <Button variant="outline-primary" className="mb-2">
                        Check Cusstomer Review
                      </Button>
                      <Button variant="outline-success" className="mb-2">
                        Est Price: $xx.xx
                      </Button>
                      <Button>Commit</Button>
                    </Col>
                  </Row>
                  <hr></hr>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://insight.study.csu.edu.au/wp-content/uploads/2022/03/M1268_female-tradies_banner.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Gaurenteed, reliable income as a Trust Trade Professional
                  Member
                </Card.Title>
                <Card.Text>
                  For just $xx.xx a month, a Trusty Trade Membership provides
                  reliable access to jobs and income
                </Card.Text>
                <Button className="mb-2" variant="success">
                  Learn More
                </Button>
                <div style={{ fontSize: "0.75rem" }}>
                  T&Cs apply. Not everywhere and not forever.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
