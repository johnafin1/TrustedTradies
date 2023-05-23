import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProfessionalPanel from './professionalpanel'

export default function ProfessionalInbox() {

    const mailData = [
        {
          id: 1,
          sender: 'John Doe',
          date: '2023-05-20',
          subject: 'Regarding Project Proposal',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isRead: false
        },
        {
          id: 2,
          sender: 'Jane Smith',
          date: '2023-05-18',
          subject: 'Meeting Reminder',
          message: 'Hi, just a reminder about our meeting tomorrow.',
          isRead: true
        },
        {
          id: 3,
          sender: 'Zack',
          date: '2023-05-20',
          subject: 'Regarding Project Postpone',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isRead: true
        },
        {
          id: 4,
          sender: 'Smith',
          date: '2023-05-18',
          subject: 'Meeting Delay',
          message: 'Hi, just a reminder about our meeting tomorrow.',
          isRead: true
        }
        // Add more mail objects as needed
      ];
      
      
        const [mailList, setMailList] = useState(mailData);
        const [selectedMail, setSelectedMail] = useState(null);
      
        const handleComposeMail = () => {
          // Logic for composing new mail
          console.log('Compose new mail');
        };
      
        const handleMarkAllAsRead = () => {
          const updatedMailList = mailList.map(mail => ({ ...mail, isRead: true }));
          setMailList(updatedMailList);
        };
      
        const handleFilterByTimespan = event => {
          const timespan = event.target.value;
          // Logic for filtering mails by timespan
          console.log('Filter by timespan:', timespan);
        };
      
        const handleMarkAsRead = id => {
          const updatedMailList = mailList.map(mail =>
            mail.id === id ? { ...mail, isRead: true } : mail
          );
          setMailList(updatedMailList);
        };
      
        const handleDeleteMail = id => {
          const updatedMailList = mailList.filter(mail => mail.id !== id);
          setMailList(updatedMailList);
        };
      
        const handleOpenMail = id => {
          const selectedMail = mailList.find(mail => mail.id === id);
          setSelectedMail(selectedMail);
        };
      
        const handleCloseMail = () => {
          setSelectedMail(null);
        };
      
        const renderMailCards = () => {
            return (
              <div className="mail-list-container" style={{ height: '500px', overflow: 'auto' }}>
                {mailList.map(mail => (
                  <div className={`card mb-3 ${mail.isRead ? 'read' : ''}`} key={mail.id}>
                    <div className="card-body">
                      <h5 className="card-title">Sender: {mail.sender}</h5>
                      <p className="card-text">
                        <strong>Date:</strong> {mail.date}
                      </p>
                      <p className="card-text">
                        <strong>Subject:</strong> {mail.subject}
                      </p>
                      <p className="card-text">
                        <strong>Message:</strong> {mail.message}
                      </p>
                      <div className="card-footer">
                        <button className="btn btn-primary btn-gap" onClick={() => handleMarkAsRead(mail.id)}>
                          Mark as Read
                        </button>
                        <button className="btn btn-danger btn-gap" onClick={() => handleDeleteMail(mail.id)}>
                          Delete
                        </button>
                        <button className="btn btn-info" onClick={() => handleOpenMail(mail.id)}>
                          Open
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <style>
        {`
        .btn-gap {
          margin-right: 0.5rem;
        }
        `}
      </style>
              </div>
            );
          };
         
          
          
  return (
    <>
    <ProfessionalPanel />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ borderRadius: '25%' }}
              width="60px"
              src={require('../assets/inboxicon.jpeg')}
              alt="Hero 1"
            />
            <text className="boxTitle" style={{ marginLeft: 10, fontSize: 24 }}>
              Inbox
            </text>
          </div>
        </div>
      </div>
      <br />
    


      <div className="container">
  <div className="row">
    <div className="col-5">
      <div className="mb-3">
        <button className="btn btn-primary mb-3" style={{ marginRight: 6 }} onClick={handleComposeMail}>
          Compose New Mail
        </button>
        <button className="btn btn-secondary ml-2 mb-3" onClick={handleMarkAllAsRead}>
          Mark All as Read
        </button>
        <br />
        <div className="d-inline ml-2">
          <label htmlFor="filterBy">Filter By:</label>
          <select className="form-control" id="filterBy" onChange={handleFilterByTimespan}>
            <option value="">All</option>
            <option value="highestEarning">Date</option>
            <option value="highestRating">Read First</option>
            <option value="byDate">Unread First</option>
          </select>
        </div>
      </div>
      {renderMailCards()}
    </div>

    <div className="col-1">
      <div className="vertical-hr"></div>
    </div>

    <div className="col-6">
        <h2>Compose new Mail</h2>
      <div className="card bg-light mb-3">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input type="text" className="form-control" id="to" />
          </div>
          <div className="form-group">
            <label htmlFor="cc">CC:</label>
            <input type="text" className="form-control" id="cc" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" className="form-control" id="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
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

      {/* Modal for opening mail */}
      {selectedMail && (
        <Modal show={true} onHide={handleCloseMail}>
          <Modal.Header closeButton>
            <Modal.Title>Mail Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Sender: {selectedMail.sender}</h5>
            <p>
              <strong>Date:</strong> {selectedMail.date}
            </p>
            <p>
              <strong>Subject:</strong> {selectedMail.subject}
            </p>
            <p>
              <strong>Message:</strong> {selectedMail.message}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMail}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      
    
    </>
  )
}
