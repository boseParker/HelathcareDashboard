import Teeth  from '../assets/images/teeth.png'
import Arms  from '../assets/images/arms.png'
import { FaUserCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const userDetailicons=[
  <FaUserCircle/>,
  <IoMdAdd/>

]
const calendarAppointments = [
  { day: 11, times: ['09:00'] },
  { day: 13, times: ['11:00'] },
  { day: 15, times: ['12:00', '14:00'] }
];

const appointmentDetails = [
  {
    type: 'Dentist',
    date: '2025-10-26',
    time: '09:00 - 11:00',
    doctor: 'Dr. Cameron Williamson',
    img:Teeth
  },
  {
    type: 'Physiotherapy Appointment',
    date: '2025-10-30',
    time: '11:00 - 12:00',
    doctor: 'Dr. Kevin Djones',
    img:Arms
  }
];

 const upcomingSchedule = [
  {
    time: '9:00 AM',
    date: 'Monday, Oct 25',
    type: 'General Checkup',
    doctor: 'Dr. Sarah Williams',
  },
  {
    time: '11:00 AM',
    date: 'Tuesday, Oct 26',
    type: 'Cardiology',
    doctor: 'Dr. Anil Kapoor',
  },
  {
    time: '3:00 PM',
    date: 'Wednesday, Oct 27',
    type: 'Dental Cleaning',
    doctor: 'Dr. Priya Desai',
  },
];

const clanderDates={
  dates:[11,12,13,14,15,16,17]
}

export { calendarAppointments, appointmentDetails,upcomingSchedule,userDetailicons ,clanderDates};
