import React from 'react';
import './Appoinment.css';

const AppointmentCards = ({ details }) => {
  return (
    <div className="cardSection">
      {details.map((item, idx) => (
        <div key={idx} className="appointmentCard">
          <div>
          <p className="appointmentType">{item.type}</p>
          <p className="time">{item.time}</p>
          <p className="doctor">{item.doctor}</p>
          </div>
          <div>
          <img src={item.img} alt={item.type} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCards;
