import "./user.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPanel() {
  const navigate = useNavigate();

  function handleClickManageProfile() {
    navigate("/userprofile");
  }

  function handleClickWorkHistory() {
    navigate("/userservices");
  }
  function handleClickMembership() {
    navigate("/usermembership");
  }
  function handleClickPaymentinfo() {
    navigate("/userpayment");
  }

  function handleClickContactSupport() {
   navigate("/usersupport");
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
        <div className="grid-container d-flex justify-content-center">
          <div
            className="boxUser"
            onClick={handleClickManageProfile}
            style={{ cursor: "pointer" }}
          >
            <div className="boxUser">
              <img
                style={{ borderRadius: "25%" }}
                width={"40px"}
                src={require("../assets/profileicon.png")}
                alt="Hero 1"
              />
              <text className="boxTitle">Manage Profile</text>
            </div>
          </div>
          <div
            className="boxUser"
            onClick={handleClickWorkHistory}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/workhistoryicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitle">Service Requests</text>
          </div>
          <div
            className="boxUser"
            onClick={handleClickMembership}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/reviewsicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitle">Manage Membership</text>
          </div>
          <div
            className="boxUser"
            onClick={handleClickPaymentinfo}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/paymentinfoicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitle">Payment Information</text>
          </div>
          <div
            className="boxUser"
            onClick={handleClickContactSupport}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/contactsupporticon.png")}
              alt="Hero 1"
            />
            <text className="boxTitle">Contact Support</text>
          </div>
        </div>
      </div>
      <hr className="my-4"/>
    </>
  );
}
