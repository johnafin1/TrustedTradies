import React from 'react'
import UserPanel from './userpanel' 
import "./userservices.css";


export default function UserServices() {

    const data = [
        {
          work: "Carpenter",
          location: "51 Porter Street",
          date: "12/04/2023",
          paid: "$100",
          agent: "Smith234"
        },
        {
            work: "Plumber",
            location: "51 Porter Street",
            date: "13/04/2023",
            paid: "$120",
            agent: "john123"
          },
          {
            work: "Electrician",
            location: "51 Porter Street",
            date: "14/04/2023",
            paid: "$10",
            agent: "David345"
          },
          {
            work: "House Painting",
            location: "51 Porter Street",
            date: "15/04/2023",
            paid: "$170",
            agent: "Rahul453"
          },
          {
            work: "Electrician",
            location: "51 Porter Street",
            date: "14/04/2023",
            paid: "$10",
            agent: "David345"
          },
          {
            work: "IKEA assembler",
            location: "51 Porter Street",
            date: "18/04/2023",
            paid: "$150",
            agent: "Zack455"
          },
        // Add more objects here
      ];
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
                src={require("../assets/workhistoryicon.png")}
                alt="Hero 1"
              />
              <text
                className="boxTitle"
                style={{ marginLeft: 10, fontSize: 24 }}
              >
                Services Requests
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
    <div className="col d-flex align-items-center">
      <button className="btn btn-primary mr-3">Request Service</button>
      <button className="btn btn-primary mr-3">Show Previous Services</button>
      <select className="form-select mr-3">
        <option>1 week</option>
        <option>2 weeks</option>
        <option>1 month</option>
        <option>3 months</option>
        <option>6 months</option>
        <option>1 year</option>
      </select>
      <select className="form-select">
        <option>Filter by category</option>
        <option>Filter by rating</option>
        <option>Filter by date</option>
      </select>
      <div className="form-check ml-3">
        <input className="form-check-input" type="checkbox" id="activeServices" />
        <label className="form-check-label" htmlFor="activeServices">
          Show active services only
        </label>
      </div>
    </div>
  </div>
  <div className="row mt-3 justify-content-center">
  {data.map((item, index) => (
    <div className="col-6 justify-content-center" key={index}>
      <div className="container p-3 border rounded-lg custom-container">
        <div className="row">
          <div className="col-4">
            <label className="fw-bold">Work:</label>
          </div>
          <div className="col-8">
            <input className="form-control" type="text" readOnly value={item.work} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <label className="fw-bold">Location:</label>
          </div>
          <div className="col-8">
            <input className="form-control" type="text" readOnly value={item.location} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label className="fw-bold">Date:</label>
            <input className="form-control" type="text" readOnly value={item.date} />
          </div>
          <div className="col">
            <label className="fw-bold">Paid:</label>
            <input className="form-control" type="text" readOnly value={item.paid} />
          </div>
          <div className="col">
            <label className="fw-bold">Agent:</label>
            <input className="form-control" type="text" readOnly value={item.agent} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-2 ">
            <button className="btn btn-primary custom-button">Track</button>
          </div>
          <div className="col-1">
            <button className="btn btn-primary custom-button">Review</button>
          </div>
        </div>
      
      </div>
      <br />
    </div>
  ))}
</div>
</div>


    </>
  )
}
