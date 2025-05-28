import React from 'react';
import './CalenderSection.css';
import CalendarGrid from './CalenderGrid/CalenderGrid';
import AppointmentCards from './Appoinment/Appoinment';
import UpcomingSchedule from './UpcomingSchedule/UpcomingShedule';
import UserDetail from './UserDetail/UserDetail';

const CalendarSection = ({ calendarAppointments, appointmentDetails,upcomingSchedule ,userDetailicons,clanderDates}) => {
  return (
    <div className="calendarWrapper">
        <UserDetail userDetailicons={userDetailicons}/>

      <h3 className="calendarTitle">October 2025</h3>
      <CalendarGrid appointments={calendarAppointments} clanderDates={clanderDates} />
      <AppointmentCards details={appointmentDetails} />
      <UpcomingSchedule upcomingSchedule={upcomingSchedule}/>
    </div>
  );
};

export default CalendarSection;
