import './App.css'
import { BrowserRouter } from 'react-router-dom'
import SideNavbar from './components/SideNavabr/SideNavbar'
import { navlinks } from './data/navalinkData'
import BodyContent from './components/BodyContent/BodyContent'
import {bodypart,Activitydata} from './data/bodyPartData'
import Calendersection from './components/calenderSection/Calendersection'
import { calendarAppointments, appointmentDetails,upcomingSchedule ,userDetailicons,clanderDates} from "./data/calenderdata"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <SideNavbar navlinks={navlinks}/>
          <BodyContent
           bodypart={bodypart}
          Activitydata={Activitydata}
           className="body-content"/>


          <Calendersection 
          calendarAppointments={calendarAppointments}
          appointmentDetails={appointmentDetails}
          upcomingSchedule={upcomingSchedule}
          userDetailicons={userDetailicons}
          clanderDates={clanderDates}  
          
          className="calender-content"
          />
        </div>
       
      </BrowserRouter>
    </>
  )
}

export default App
