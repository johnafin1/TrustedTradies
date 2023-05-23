import ProfessionalPanel from './professionalpanel'
import React, { useState } from 'react';
import './WorkHistory.css';


export default function ProfessionalHistory() {
    const workHistoryData = [
        {
          work: 'Work 1',
          location: 'Location 1',
          date: '2023-05-01',
          earning: 150,
          rating: 4.9
        },
        {
          work: 'Work 2',
          location: 'Location 2',
          date: '2023-05-05',
          earning: 170,
          rating: 4.2
        },
        {
          work: 'Work 3',
          location: 'Location 3',
          date: '2023-05-10',
          earning: 100,
          rating: 4.8
        }
      ];
    
      const [selectedFilter, setSelectedFilter] = useState('Date');
    
      const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
      };
    
      const filterWorkHistoryData = () => {
        let filteredData = [...workHistoryData];
        switch (selectedFilter) {
          case 'Earning':
            filteredData.sort((a, b) => b.earning - a.earning);
            break;
          case 'Rating':
            filteredData.sort((a, b) => b.rating - a.rating);
            break;
          default:
            filteredData.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            );
        }
        return filteredData;
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
          src={require("../assets/workhistoryicon.png")}
          alt="Hero 1"
        />
      <text className='boxTitle' style={{marginLeft: 10, fontSize: 24}}>Work History</text>
    </div>
  </div>
</div>
<br />
<div className="container text-center">
      <h4>Total working hours: 100</h4>
      <h4>Total earning: $1000</h4>
      <div className="row justify-content-center mb-4">
        <div className="col-2">
          <select
            className="form-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="Date">Filter by Date</option>
            <option value="Earning">Filter by Earning</option>
            <option value="Rating">Filter by Rating</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        {filterWorkHistoryData().map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">Work Information</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Work:</strong> {item.work}
                  </li>
                  <li className="list-group-item">
                    <strong>Location:</strong> {item.location}
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
                    <strong>Earning:</strong> ${item.earning}
                  </li>
                  <li className="list-group-item">
                    <strong>Rating:</strong> {item.rating}
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">
                  Profit/Loss Breakdown
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
