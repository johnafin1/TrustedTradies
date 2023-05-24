import "./professional.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfessionalPanel() {
  const navigate = useNavigate();

  function handleClickManageProfile() {
    navigate("/professionalprofile");
  }

  function handleClickStatistics() {
    navigate("/professionalstats");
  }
  function handleClickWorkHistory() {
    navigate("/professionalhistory");
  }
  function handleClickReviews() {
    navigate("/professionalreviews");
  }
  function handleClickInbox() {
    navigate("/professionalinbox");
  }

  function handleClickContactSupport() {
    navigate("/professionalsupport");
  }
  function handleClickManageMembership() {
    navigate("/professionalmembership");
  }

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

  return (
    <>
      <div className="container my-3 d-flex justify-content-center">
        <div className="grid-container" style={{gridTemplateColumns: "repeat(7, 1fr)",   display: "grid", gap: "20px"
}}>
          <div
            className="box"
            onClick={handleClickManageProfile}
            style={{ cursor: "pointer" }}
          >
            <div className="box">
              <img
                style={{ borderRadius: "25%" }}
                width={"40px"}
                src={require("../assets/profileicon.png")}
                alt="Hero 1"
              />
              <text className="boxTitleforpro">Manage Profile</text>
            </div>
          </div>
          <div
            className="box"
            onClick={handleClickStatistics}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/statisticsicon.jpeg")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Statistics</text>
          </div>
          <div
            className="box"
            onClick={handleClickWorkHistory}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/workhistoryicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Work History</text>
          </div>
          <div
            className="box"
            onClick={handleClickReviews}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/reviewsicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Reviews</text>
          </div>
          <div
            className="box"
            onClick={handleClickInbox}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/inboxicon.jpeg")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Inbox</text>
          </div>
          <div
            className="box"
            onClick={handleClickManageMembership}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"50px"}
              src={require("../assets/managemem.jpeg")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Manage Membership</text>
          </div>
          <div
            className="box"
            onClick={handleClickContactSupport}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/contactsupporticon.png")}
              alt="Hero 1"
            />
            <text className="boxTitleforpro">Contact Support</text>
          </div>
          
        </div>
      </div>
      <div className="container my-4">
        <div className="row my-2">
          <div className="col">
            <h3 className="mb-0">Activity Status</h3>
          </div>
          <div className="col-10">
            <button
              id="statusButton"
              className={`btn ${
                isActive ? "btn-outline-success" : "btn-outline-danger"
              }`}
              onClick={toggleStatus}
              style={{ padding: "8px 30px", fontSize: "14px" }}
            >
              {isActive ? "Active" : "Inactive"}
            </button>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    </>
  );
}
