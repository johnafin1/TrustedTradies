import React, { useState } from "react";
import ProfessionalPanel from "./professionalpanel";
import { Modal, Button } from "react-bootstrap";

const reviewData = [
  {
    clientName: "John Doe",
    workRequested: "Plumbing",
    reviewDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet tristique nulla, sed rhoncus elit tempor in.",
    date: "2023-05-20",
    rating: 4.5,
  },
  {
    clientName: "Jane Smith",
    workRequested: "Electrical Repair",
    reviewDescription:
      "Sed eget mauris arcu. Integer at tortor felis. Donec eget commodo elit, ut semper ex.",
    date: "2023-05-18",
    rating: 5.0,
  },
  {
    clientName: "David Johnson",
    workRequested: "Painting",
    reviewDescription:
      "Curabitur consectetur fringilla augue, id finibus nunc. Phasellus non semper nunc, sit amet commodo ante.",
    date: "2023-05-16",
    rating: 4.0,
  },
];

const calculateAverageRating = () => {
  if (reviewData.length === 0) {
    return 0;
  }

  const totalRating = reviewData.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return totalRating / reviewData.length;
};

export default function ProfessionalReviews() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderReviewCards = () => {
    return reviewData.map((item, index) => (
      <div className="col-lg-4 mb-4" key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Work Information</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Client Name:</strong> {item.clientName}
              </li>
              <li className="list-group-item">
                <strong>Work Requested:</strong> {item.workRequested}
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Additional Information</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Date:</strong> {item.date}
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong> {item.rating}
              </li>
              <li className="list-group-item">
                <strong>Review Description:</strong>{" "}
                {item.reviewDescription.length > 50
                  ? item.reviewDescription.substring(0, 50) + "...read more"
                  : item.reviewDescription}
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary"
              onClick={() => handleOpenModal(item)}
            >
              Open
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <ProfessionalPanel />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ borderRadius: "25%" }}
              width="55px"
              src={require("../assets/reviewsicon.png")}
              alt="Hero 1"
            />
            <text className="boxTitle" style={{ marginLeft: 10, fontSize: 24 }}>
              Reviews
            </text>
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="row">
              <div className="col">
                {/* Filter by option */}
                <div className="form-group">
                  <label htmlFor="filterBy">Filter By:</label>
                  <select className="form-control" id="filterBy">
                    <option value="">All</option>
                    <option value="highestEarning">Highest Earning</option>
                    <option value="highestRating">Highest Rating</option>
                    <option value="byDate">By Date</option>
                  </select>
                </div>
              </div>
              <div className="col">
                {/* Time span option */}
                <div className="form-group">
                  <label htmlFor="timeSpan">Time Span:</label>
                  <select className="form-control" id="timeSpan">
                    <option value="1week">1 Week</option>
                    <option value="2week">2 Weeks</option>
                    <option value="1month">1 Month</option>
                    <option value="3month">3 Months</option>
                    <option value="6month">6 Months</option>
                    <option value="1year">1 Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            {/* Average Rating */}
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">
                  Average Rating: {calculateAverageRating().toFixed(1)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">{renderReviewCards()}</div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Review Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display selected review information */}
          {selectedReview && (
            <div>
              <p>
                <strong>Client Name:</strong> {selectedReview.clientName}
              </p>
              <p>
                <strong>Work Requested:</strong> {selectedReview.workRequested}
              </p>
              <p>
                <strong>Review Description:</strong>{" "}
                {selectedReview.reviewDescription}
              </p>
              <p>
                <strong>Date:</strong> {selectedReview.date}
              </p>
              <p>
                <strong>Rating:</strong> {selectedReview.rating}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
