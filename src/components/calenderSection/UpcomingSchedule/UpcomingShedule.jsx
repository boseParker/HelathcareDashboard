import React from 'react';
import './UpcomingShedule.css';

const UpcomingSchedule = ({upcomingSchedule}) => {
  return (
    <div className="upcomingScheduleContainer">
      <h3 className="sectionTitle">Upcoming Schedule</h3>
      <div className="scheduleList">
        {upcomingSchedule.map((item, index) => (
          <div key={index} className="scheduleCard">
            <div className="scheduleLeft">
              <p className="scheduleTime">{item.time}</p>
              <p className="scheduleDate">{item.date}</p>
            </div>
            <div className="scheduleRight">
              <p className="scheduleType">{item.type}</p>
              <p className="scheduleDoctor">{item.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
