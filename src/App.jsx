import './App.css'
import { BrowserRouter } from 'react-router-dom'
import SideNavbar from './components/SideNavabr/SideNavbar'
import { navlinks } from './data/navalinkData'
import BodyContent from './components/BodyContent/BodyContent'
import {bodypart} from './data/bodyPartData'
import Calendersection from './components/calenderSection/Calendersection'
import { calendarAppointments, appointmentDetails } from "./data/calenderdata"
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <SideNavbar navlinks={navlinks}/>
          <BodyContent bodypart={bodypart}/>
          <Calendersection calendarAppointments={calendarAppointments}/>
        </div>
       
      </BrowserRouter>
    </>
  )
}

export default App
