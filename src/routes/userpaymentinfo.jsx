import React from 'react'
import UserPanel from './userpanel'

export default function UserPaymentinfo() {
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
                src={require("../assets/paymentinfoicon.png")}
                alt="Hero 1"
              />
              <text
                className="boxTitle"
                style={{ marginLeft: 10, fontSize: 24 }}
              >
Payment Information             
 </text>
            </div>
          </div>
        </div>
      </div>
      <div className=" row container mt-4" style={{marginLeft: 50}}>
  <div className="row" style={{marginLeft: 50}}>
    <div className="row" style={{marginLeft: 50}}>
      <div className="d-flex align-items-center">
        <label className="fw-bold me-2">Payment Method:</label>
        <div className="row mt-2 justify-content-start" style={{ marginLeft: "20px" }}>
        <div className="col">
          <button className="btn btn-outline-info" style={{ marginBottom: "15px" }}>Credit Card</button>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className="col-4 mt-3">
  <div className="col-3">
    <label className="fw-bold">Billing Address:</label>
  </div>
  <div className="col">
    <textarea className="form-control" rows="4" readOnly>
      Dummy Address
    </textarea>
  </div>
</div>

  <div className="col-3 " style={{marginLeft: 200}}>
    <div className="col">
      <button className="btn btn-outline-secondary me-3 mb-3">Change Payment Method</button>
      <button className="btn btn-outline-secondary me-3 mb-3">Edit Billing Information</button>
      <button className="btn btn-outline-secondary me-3 mb-3">Transaction History</button>
      <button className="btn btn-outline-secondary me-3 mb-3">Help and Support</button>
    </div>
  </div>
</div>

    </>
  )
}
