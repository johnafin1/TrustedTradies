import React from 'react'
import UserPanel from './userpanel'

export default function UserSupport() {
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
                src={require("../assets/contactsupporticon.png")}
                alt="Hero 1"
              />
              <text
                className="boxTitle"
                style={{ marginLeft: 10, fontSize: 24 }}
              >
                Contact Support
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-3">
      <div className="d-grid gap-3">
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#37CFC6" }}>
          Email Support
        </button>
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#37CFC6" }}>
          Call Support
        </button>
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#37CFC6" }}>
          FAQs
        </button>
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#37CFC6" }}>
          Feedback
        </button>
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#37CFC6" }}>
          Report an Issue
        </button>
      </div>
    </div>

    <div className="col-2 d-flex align-items-center justify-content-end">
  <div className="vertical-hr"></div>
</div>


    <div className="col-6">
        <h3>Ask a Query</h3>
      <div className="card bg-light mb-3">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="queryTopic">Query Topic:</label>
            
            <input type="text" className="form-control" id="queryTopic" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea className="form-control" id="message" rows="6"></textarea>
          </div>
          <br />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  {`.vertical-hr {
    border-left: 2px solid #dee2e6;
    height: 100%;
    margin: 0 auto;
  }
  `}
</style>
    </>
  )
}
