import React, { useState } from "react";
import ProfessionalPanel from "./professionalpanel";
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

export default function ProfessionalMembership() {
  const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  function ButtonWithHover({ label }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const buttonStyle = {
      borderColor: "#6699CC",
      backgroundColor: isHovered ? "#6699CC" : "transparent",
      color: isHovered ? "white" : "#6699CC",
    };

    return (
      <button
        className="btn btn-outline-dark"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
    );
  }

  function ButtonWithHover({ label }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const buttonStyle = {
      borderColor: "#6699CC",
      backgroundColor: isHovered ? "#6699CC" : "transparent",
      color: isHovered ? "white" : "#6699CC",
    };

    return (
      <button
        className="btn btn-outline-dark"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
    );
  }
  return (
    <>
      <ProfessionalPanel />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ borderRadius: "25%" }}
              width="55px"
              src={require("../assets/managemem.jpeg")}
              alt="Hero 1"
            />
            <text className="boxTitle" style={{ marginLeft: 10, fontSize: 24 }}>
              Manage Membership
            </text>
          </div>
        </div>

        <br />
        <div className="row align-items-center justify-content-center">
          <div className="col-5 ml-5">
            <div className="container p-3 border-0 rounded-lg ">
              <div className="row">
                <div className="col-5">
                  <label className="fw-bold">Subscription:</label>
                </div>
                <div className="col-auto" style={{ marginTop: "0px" }}>
                  <button className="btn btn-success btn-lg pl-4">
                    Active
                  </button>
                </div>
              </div>
              <div
                className="row mt-3 justify-content-end"
                style={{ marginRight: "140px" }}
              >
                <div className="col">
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginBottom: "15px" }}
                  >
                    Cancel membership
                  </button>
                </div>
              </div>
              <div className="row mt-2 justify-content-end">
                <div className="col">
                  <button
                    className="btn btn-outline-primary"
                    style={{ marginBottom: "15px" }}
                  >
                    Upgrade Membership
                  </button>
                </div>
              </div>
              <div className="row mt-2 justify-content-end">
                <div className="col">
                  <button
                    className="btn btn-outline-secondary"
                    style={{ marginBottom: "15px" }}
                  >
                    Billing Information
                  </button>
                </div>
              </div>
              <div className="row mt-2 justify-content-end">
                <div className="col">
                  <button
                    className="btn btn-outline-info"
                    style={{ marginBottom: "15px" }}
                  >
                    Subscription History
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 justify-content-start">
            <Card style={{ width: "60%" }}>
              <Card.Img
                variant="top"
                src={require("../assets/managemempro.jpeg")}
              />
              <Card.Body style={{ color: "#00A9D7", textAlign: "center" }}>
                <Card.Title>
                  Join our professional membership today and gain access to
                  exclusive perks, including extra paid opportunities and
                  guaranteed income
                </Card.Title>
                <div style={{ fontSize: "0.75rem" }}>
                  T&Cs apply. Not everywhere and not forever.
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
