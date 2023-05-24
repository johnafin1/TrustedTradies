import React, { useState } from "react";
import UserPanel from './userpanel'


export default function UserMembership() {
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
<UserPanel/>
<div className="container my-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                style={{ borderRadius: "25%" }}
                width={"55px"}
                src={require("../assets/reviewsicon.png")}
                alt="Hero 1"
              />
              <text
                className="boxTitle"
                style={{ marginLeft: 10, fontSize: 24 }}
              >
            Manage Membership             
             </text>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 align-items-center justify-content-center">
  <div className="col-5 ml-5">
    <div className="container p-3 border-0 rounded-lg "style={{ marginLeft: "70px" }}>
      <div className="row">
        <div className="col-5">
          <label className="fw-bold">Subscription:</label>
        </div>
        <div className="col-auto" style={{ marginTop: "0px" }}>
  <button className="btn btn-success btn-lg pl-4">Active</button>
</div>

      </div>
      <div className="row mt-3 justify-content-end" style={{ marginRight: "140px" }}>
        <div className="col-auto">
          <button className="btn btn-outline-danger"style={{ marginBottom: "15px" }}>Cancel membership</button>
        </div>
      </div>
      <div className="row mt-2 justify-content-end" style={{ marginLeft: "200px" }}>
        <div className="col">
          <button className="btn btn-outline-primary" style={{ marginBottom: "15px" }}>Upgrade Membership</button>
        </div>
      </div>
      <div className="row mt-2 justify-content-end" style={{ marginLeft: "200px" }}>
        <div className="col">
          <button className="btn btn-outline-secondary" style={{ marginBottom: "15px" }}>Billing Information</button>
        </div>
      </div>
      <div className="row mt-2 justify-content-end" style={{ marginLeft: "200px" }}>
        <div className="col">
          <button className="btn btn-outline-info" style={{ marginBottom: "15px" }}>Subscription History</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-7 justify-content-start">
  <img src={require("../assets/managemem.png")} alt="Manage Membership" className="img-fluid" style={{ width: "75%", marginRight: "25px" }} />
</div>

</div>


</>
    )
}