import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";

export default function Home() {
  const services = [
    {
      img: "",
      text: "Furniture Assembly",
    },
    {
      img: "",
      text: "Landscaping",
    },
    {
      img: "",
      text: "3",
    },
  ];

  return (
    <>
      <Container>
        <Row style={{ margin: "16px 0" }}>
          <Col>Put rating here ?image vs component</Col>
          <Col>
            <span className="text-title">
              1,000+ trusted & expert professionals contributing to 100,000+
              satisfied customers{" "}
            </span>
          </Col>
        </Row>
        <Row style={{ margin: "16px 0" }}>
          <Col style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.5vw", fontWeight: "100" }}>
                  Where quality meets local convenience
                </div>
                <div style={{ fontSize: "0.8vw", marginBottom: "8px" }}>
                  Popular Searches this Season
                </div>
                <div>
                  <Button size="sm" variant="outline-primary">
                    Tree Services
                  </Button>{" "}
                  <Button size="sm" variant="outline-primary">
                    Fencing
                  </Button>{" "}
                  <Button size="sm" variant="outline-primary">
                    Hot Water Servicing
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    More...
                  </Button>{" "}
                </div>
              </div>
            </div>
            <img
              width={"100%"}
              src={require("../assets/t_combined.png")}
              alt="Hero 1"
            ></img>
          </Col>
        </Row>
        <Row style={{ margin: "16px 0" }}>
          <Col>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={require("../assets/t_1.jpg")}
              alt="Tradeperson"
            ></img>
          </Col>
          <Col
            style={{ textAlign: "center", backgroundColor: "#F7F7F7" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="p-5">
              <p className="text-title">BECOME A MEMBER TODAY</p>
              <p className="text-body-1">
                Get unlimited assistance callouts at your fingertips! Just pay
                an annual fixed fee - no hidden costs, no worries!
              </p>
              <Button size="lg" variant="primary">
                Join Now
              </Button>{" "}
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "16px 0" }}>
          <Col>
            <div
              className="text-title"
              style={{ textAlign: "center", fontSize: "2vw" }}
            >
              Services Near Me
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((el) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
