import './professional.css';
import React, { useState } from 'react';
import ProfessionalPanel from './professionalpanel';

/*
Tasks to do on this page - 
1) set router to all 6 top div tags - profile, statistics, work history, reviews, inbox, support. 
2) set functionality to the buttons in manage profile page - change profile info, edit skills, change login creds etc. 
3) set useState to get real profile data including profile photo and information.
4) Remove "Become a member" button from the top bar. 
5) Modify the "Register as professional" button to the professional's name. 
6) Make a separate component for the first top half of the current page (until the hr) so to reuse it for other 5 routes.
7) Ask Dan about how are we planning to sync this page with login creds.  
*/

export default function Professional() {
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
        borderColor: '#6699CC',
        backgroundColor: isHovered ? '#6699CC' : 'transparent',
        color: isHovered ? 'white' : '#6699CC'
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
    function handleClickManageProfile() {
      console.log("Clicked on Manage Profile");
    }
    
    function handleClickStatistics() {
      console.log("Clicked on Statistics");
    }
    
    function handleClickWorkHistory() {
      console.log("Clicked on Work History");
    }
    
    function handleClickReviews() {
      console.log("Clicked on Reviews");
    }
    
    function handleClickInbox() {
      console.log("Clicked on Inbox");
    }
    
    function handleClickContactSupport() {
      console.log("Clicked on Contact Support");
    }

  return(
    <>
     <div className="container my-3 d-flex justify-content-center">
      <div className="grid-container">
        <div className="box" onClick={handleClickManageProfile} style={{ cursor: "pointer" }}>
          <div className='box'>
            <img
              style={{ borderRadius: "25%" }}
              width={"40px"}
              src={require("../assets/profileicon.png")}
              alt="Hero 1"
            />
            <text className='boxTitle'>Manage Profile</text>
          </div>
        </div>
        <div className="box" onClick={handleClickStatistics} style={{ cursor: "pointer" }}>
          <img
            style={{ borderRadius: "25%" }}
            width={"40px"}
            src={require("../assets/statisticsicon.jpeg")}
            alt="Hero 1"
          />
          <text className='boxTitle'>Statistics</text>
        </div>
        <div className="box" onClick={handleClickWorkHistory} style={{ cursor: "pointer" }}>
          <img
            style={{ borderRadius: "25%" }}
            width={"40px"}
            src={require("../assets/workhistoryicon.png")}
            alt="Hero 1"
          />
          <text className='boxTitle'>Work History</text>
        </div>
        <div className="box" onClick={handleClickReviews} style={{ cursor: "pointer" }}>
          <img
            style={{ borderRadius: "25%" }}
            width={"40px"}
            src={require("../assets/reviewsicon.png")}
            alt="Hero 1"
          />
          <text className='boxTitle'>Reviews</text>
        </div>
        <div className="box" onClick={handleClickInbox} style={{ cursor: "pointer" }}>
          <img
            style={{ borderRadius: "25%" }}
            width={"40px"}
            src={require("../assets/inboxicon.jpeg")}
            alt="Hero 1"
          />
          <text className='boxTitle'>Inbox</text>
        </div>
        <div className="box" onClick={handleClickContactSupport} style={{ cursor: "pointer" }}>
          <img
            style={{ borderRadius: "25%" }}
            width={"40px"}
            src={require("../assets/contactsupporticon.png")}
            alt="Hero 1"
          />
          <text className='boxTitle'>Contact Support</text>
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
            className={`btn ${isActive ? 'btn-outline-success' : 'btn-outline-danger'}`}
            onClick={toggleStatus}
            style={{ padding: '8px 30px', fontSize: '14px' }}>
            {isActive ? 'Active' : 'Inactive'}
          </button>
        </div>
      </div>
      <hr className='my-4'/>
      <div className="container">
  <div className="row">
    <div className="col">
    <img
          style={{ borderRadius: "25%" }}
          width={"35px"}
          src={require("../assets/profileicon.png")}
          alt="Hero 1"
        />
      <text className='boxTitle' style={{marginLeft: 10, fontSize: 24}}>Profile</text>
    </div>
  </div>
</div>
    
    </div>
    <div className="container">
  <div className="row justify-content-center">
      <div className="col-auto"><ButtonWithHover label="Edit Profile Information" /></div>
      <div className="col-auto"><ButtonWithHover label="Update Skills" /></div>
      <div className="col-auto"><ButtonWithHover label="Change Login Info" /></div>
      <div className="col-auto"><ButtonWithHover label="Career" /></div>
      <div className="col-auto"><ButtonWithHover label="Reviews" /></div>
      <div className="col-auto"><ButtonWithHover label="Support" /></div>
  </div>
</div>
<div className="container justify-content-center my-5">
  <div className="row justify-content-left" style={{marginLeft:40}}>
    <div className="col-auto">
      <img src={require("../assets/t_1.jpg")} alt="Profile" width="220" height="240" />
    </div>
    <div className="col-auto">
      <div className="profile-details">
        <h2>Name</h2>
        <p className="profile-info">Joined: <span style={{fontWeight:400}}>Joined Date</span></p>
        <p className="profile-info">Jobs Completed: <span style={{fontWeight:400}}>Number of Jobs Completed</span></p>
        <p className="profile-info">Email: <span style={{fontWeight:400}}>Email Address</span></p>
        <p className="profile-info">Phone Number: <span style={{fontWeight:400}}>Phone Number</span></p>
        <p className="profile-info">Location: <span style={{fontWeight:400}}>Location</span></p>
        <p className="profile-info">Languages: <span style={{fontWeight:400}}>Languages</span></p>
        <p className="profile-info">Rating: <span style={{fontWeight:400}}>Rating</span></p>
      </div>
    </div>
    <div className="col-auto" style={{marginLeft:50}}>
      <div className="skills-section">
      <p className="profile-info">Skills: <span style={{fontWeight:400}}>car repair, paint</span></p>
        <p className='profile-info'>Description:</p>
        <textarea className="form-control" style={{ backgroundColor: '#ececec', width: '441px', height: '186px' }}></textarea>

      </div>
    </div>
  </div>
</div>


    </>
  );
}
