import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
// import Image from "react-bootstrap/Image";

export default function Home() {
  const navigate = useNavigate();

  function gotoMemberSignup() {
    navigate("/signup/member");
  }

  const services = [
    {
      img: "https://www.leatherman.com/on/demandware.static/-/Library-Sites-leatherman-shared2020/default/dw7a20553f/blog/home/diy/7-hacks-for-assembling-furniture/AssemblingFurniture-full.jpg",
      text: "Furniture Assembly",
    },
    {
      img: "https://res.akamaized.net/domain/image/fetch/t_web/https://static.domain.com.au/domainblog/uploads/2015/03/18024707/7-landscaping-tips.jpg",
      text: "Landscaping",
    },
    {
      img: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2018/11/cleanSick-628306310_770x533-650x428.jpg",
      text: "Cleaning",
    },
    {
      img: "https://www.gopeople.com.au/wp-content/uploads/2022/03/pexels-rodnae-productions-7363098.jpg",
      text: "Delivery",
    },
    {
      img: "https://www.aaronmachineshop.com/wp-content/uploads/2022/10/metalfabrication.jpg",
      text: "Metal Works",
    },
    {
      img: "https://www.rollingstone.com/wp-content/uploads/2021/08/AdobeStock_131179423.jpeg",
      text: "Pool Cleaning",
    },
  ];

  return (
    <>
      <Container>
        <Row style={{ margin: "16px 0" }}>
          <Col style={{ textAlign: "center" }}>
            <img
              src={require("../assets/5_stars.svg.png")}
              alt="stars"
              style={{ width: "200px" }}
            ></img>
            <div>
              <span className="text-title">100,000+ Customer Reviews</span>
            </div>
          </Col>
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
              <Button size="lg" variant="primary" onClick={gotoMemberSignup}>
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
        <Row style={{ margin: "16px 0" }}>
          {services.map((el) => (
            <Col key={el.img} md={4} style={{ marginTop: "16px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={el.img} />
                <Card.Body>
                  <Card.Title>{el.text}</Card.Title>
                  <Card.Text>Avg $50 - $120</Card.Text>
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
