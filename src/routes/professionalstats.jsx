import './professional.css';
import React, { useState } from 'react';
import ProfessionalPanel from './professionalpanel';
import { Dropdown, DropdownButton } from 'react-bootstrap';



export default function ProfessionalStats() {

const [selectedTimeSpan, setSelectedTimeSpan] = useState(null);
      
const handleTimeSpanSelect = (eventKey) => {
     setSelectedTimeSpan(eventKey);
};

  return (
    <>
    <ProfessionalPanel/>
    <div className="container">
  <div className="row">
    <div className="col">
    <img
          style={{ borderRadius: "25%" }}
          width={"35px"}
          src={require("../assets/statisticsicon.jpeg")}
          alt="Hero 1"
        />
      <text className='boxTitle' style={{marginLeft: 10, fontSize: 24}}>Statistics</text>
    </div>
  </div>
</div>
<br />
    <div className="container">
  <div className="row">
  <DropdownButton
        id="timeSpanDropdown"
        title={selectedTimeSpan ? selectedTimeSpan : "Time Span"}
        onSelect={handleTimeSpanSelect}
      >
        <Dropdown.Item eventKey="1 Week">1 Week</Dropdown.Item>
        <Dropdown.Item eventKey="2 Weeks">2 Weeks</Dropdown.Item>
        <Dropdown.Item eventKey="1 Month">1 Month</Dropdown.Item>
        <Dropdown.Item eventKey="3 Months">3 Months</Dropdown.Item>
        <Dropdown.Item eventKey="6 Months">6 Months</Dropdown.Item>
        <Dropdown.Item eventKey="1 Year">1 Year</Dropdown.Item>
      </DropdownButton>
</div>
<br />
  
  <div className="row">
    <div className="col-lg-6">
      {/* Statistics data */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Statistics</h5>
          <ul className="list-group">
            <li className="list-group-item">Jobs Completed: 50</li>
            <li className="list-group-item">Average Working Hours: 5</li>
            <li className="list-group-item">Total Working Hours: 250</li>
            <li className="list-group-item">Average Customer Review: 4.5</li>
            <li className="list-group-item">Total Earnings: $1000</li>
            <li className="list-group-item">Average Earnings per Job: $20</li>
            <li className="list-group-item">Highest Paid Work: $50</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      {/* Bar graph */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Bar Graph</h5>
          <div className="chart-container">
            {/* Insert your bar graph here */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
