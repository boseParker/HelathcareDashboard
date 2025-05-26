import './App.css'
import { BrowserRouter } from 'react-router-dom'
import SideNavbar from './components/SideNavabr/SideNavbar'
import { navlinks } from './data/navalinkData'
import BodyContent from './components/BodyContent/BodyContent'
import {bodypart} from './data/bodyPartData'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <SideNavbar navlinks={navlinks}/>
          <BodyContent bodypart={bodypart}/>
        </div>
       
      </BrowserRouter>
    </>
  )
}

export default App
