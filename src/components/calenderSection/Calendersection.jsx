// src/components/calendarSection/CalendarSection.jsx
import React from 'react';
import './CalenderSection.css';
import CalendarGrid from './CalenderGrid/CalenderGrid';
import AppointmentCards from './Appoinment/Appoinment';
import { calendarAppointments, appointmentDetails,upcomingSchedule ,userDetailicons} from '../../data/calenderdata';
import UpcomingSchedule from './UpcomingSchedule/UpcomingShedule';
import UserDetail from './UserDetail/UserDetail';

const CalendarSection = () => {
  return (
    <div className="calendarWrapper">
        <UserDetail userDetailicons={userDetailicons}/>

      <h3 className="calendarTitle">October 2025</h3>
      <CalendarGrid appointments={calendarAppointments} />
      <AppointmentCards details={appointmentDetails} />
      <UpcomingSchedule upcomingSchedule={upcomingSchedule}/>
    </div>
  );
};

export default CalendarSection;
