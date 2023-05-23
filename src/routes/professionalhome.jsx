import './professional.css';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ProfessionalPanel from './professionalpanel';

export default function ProfessionalHome() {
  const [messages, setMessages] = useState([
    {
      sender: 'John Doe',
      title: 'Urgent Announcement',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-05-24'
    },
    {
      sender: 'Jane Smith',
      title: 'Important Update',
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-05-25'
    },
    {
      sender: 'Mike Johnson',
      title: 'Meeting Reminder',
      message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2023-05-26'
    }
  ]);
  const upcomingAppointments = [
    {
      work: 'Project A',
      location: 'Office 1',
      date: '2023-05-28'
    },
    {
      work: 'Project B',
      location: 'Office 2',
      date: '2023-05-29'
    },
    {
      work: 'Project C',
      location: 'Office 3',
      date: '2023-05-30'
    }];

  const handleMarkAsRead = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages.splice(index, 1);
      return updatedMessages;
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleOpen = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ProfessionalPanel />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="my-3">
              <h3>Urgent Updates</h3>
            </div>
            {messages.map((message, index) => (
              <div className="card bg-light mb-3" id={`update${index + 1}`} key={index}>
                <div className="card-body">
                  <div className="form-group row">
                    <label htmlFor={`sender${index}`} className="col-2 col-form-label fw-bold">
                      Sender
                    </label>
                    <div className="col-5">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id={`sender${index}`}
                        value={message.sender}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor={`title${index}`} className="col-sm-2 col-form-label fw-bold">
                      Title
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id={`title${index}`}
                        value={message.title}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor={`message${index}`} className="col-sm-2 col-form-label fw-bold">
                      Message
                    </label>
                  
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id={`message${index}`}
                        value={message.message.length > 30 ? `${message.message.substring(0, 30)}...` : message.message}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor={`date${index}`} className="col-sm-2 col-form-label fw-bold">
                      Date
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id={`date${index}`}
                        value={message.date}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-primary me-3" onClick={() => handleOpen(message)}>
                    Open
                  </button>
                  <button className="btn btn-outline-success" onClick={() => handleMarkAsRead(index)}>
                    Mark as Read
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
  <div className="my-3">
    <h3>Upcoming Work Appointments</h3>
  </div>
  {upcomingAppointments.map((appointment, index) => (
    <div className="card bg-light mb-3" id={`appointment${index + 1}`} key={index}>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-sm-4">
            <h5 className="card-title">Work</h5>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control border-2 border-ececec custom-input"
              placeholder="Enter Work"
              value={appointment.work}
              readOnly
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <h5 className="card-title">Location</h5>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control border-2 border-ececec custom-input"
              placeholder="Enter Location"
              value={appointment.location}
              readOnly
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <h5 className="card-title">Date</h5>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control border-2 border-ececec custom-input"
              placeholder="Enter Date"
              value={appointment.date}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

</div>
</div>
      {/* Pop-up Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Urgent Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Pop-up content, display the full information here */}
          <div className="form-group">
            <label htmlFor="sender">Sender</label>
            <input type="text" className="form-control" id="sender" value={selectedMessage?.sender} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" value={selectedMessage?.title} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              value={selectedMessage?.message}
              readOnly
              rows={5}
            />
          </div>
          {/* Add more fields as needed */}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            OK
          </button>
          <button className="btn btn-outline-success" onClick={() => handleMarkAsRead(messages.indexOf(selectedMessage))}>
            Mark as Read
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
