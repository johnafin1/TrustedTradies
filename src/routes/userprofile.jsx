import React, { useState } from "react";
import UserPanel from './userpanel'

export default function UserProfile() {
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
    <UserPanel></UserPanel>

    <div className="container my-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                style={{ borderRadius: "25%" }}
                width={"35px"}
                src={require("../assets/profileicon.png")}
                alt="Hero 1"
              />
              <text
                className="boxTitle"
                style={{ marginLeft: 10, fontSize: 24 }}
              >
                Profile
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <ButtonWithHover label="Edit Profile Information" />
          </div>
          <div className="col-auto">
            <ButtonWithHover label="Change Password" />
          </div>
          <div className="col-auto">
            <ButtonWithHover label="Service Requests" />
          </div>
          <div className="col-auto">
            <ButtonWithHover label="Reviews" />
          </div>
          <div className="col-auto">
            <ButtonWithHover label="Contact Support" />
          </div>
          <div className="col-auto">
            <ButtonWithHover label="Manage Subscription" />
          </div>
        </div>
      </div>
      <div className="container justify-content-center my-5">
        <div className="row justify-content-left" style={{ marginLeft: 40 }}>
          <div className="col-auto">
            <img
              src={require("../assets/t_1.jpg")}
              alt="Profile"
              width="220"
              height="240"
            />
          </div>
          <div className="col-auto">
            <div className="profile-details">
              <h2>Name</h2>
              <p className="profile-info">
                Joined: <span style={{ fontWeight: 400 }}>Joined Date</span>
              </p>
              <p className="profile-info">
                Services Requested:{" "}
                <span style={{ fontWeight: 400 }}>
                  Number of Jobs requested
                </span>
              </p>
              <p className="profile-info">
                Email: <span style={{ fontWeight: 400 }}>Email Address</span>
              </p>
              <p className="profile-info">
                Phone Number:{" "}
                <span style={{ fontWeight: 400 }}>Phone Number</span>
              </p>
              <p className="profile-info">
                Location: <span style={{ fontWeight: 400 }}>Location</span>
              </p>
              <p className="profile-info">
                Languages: <span style={{ fontWeight: 400 }}>Languages</span>
              </p>
            </div>
          </div>
          <div className="col-auto" style={{ marginLeft: 50 }}>
  <div className="container my-4">
    <div className="row my-2">
      <div className="col">
        <h5 className="mb-0">Subscription</h5>
      </div>
      <div className="col">
      <button
  id="statusButton"
  className={`btn ${
    isActive ? "btn-outline-success" : "btn-outline-danger"
  }`}
  onClick={toggleStatus}
  style={{ padding: "8px 30px", fontSize: "14px", borderWidth: "2px" }}
>
  {isActive ? "Active" : "Inactive"}
</button>

        <div style={{ fontSize: "12px" }}>192 days remaining</div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>


    
    </>
  )
}
