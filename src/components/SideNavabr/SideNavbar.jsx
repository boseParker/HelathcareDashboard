import { Link } from "react-router-dom"
import './SideNavbar.css'
const SideNavbar=({navlinks})=>{
    return(
        <div className="sidebar">
        <h2><span className="highlight">Health</span> care.</h2>
        <nav className="general">
            <p>General</p>
            {navlinks&& navlinks.general.map((data,index)=>{
                return(
                 
                    <li key={index} className={data.status}>
                        <>{data.icon}</>
                        <Link>{data.label}</Link>
                    </li>
                
                )
            })}
        </nav>

        <nav className="tools">
             <p>Tools</p>
            {navlinks&&navlinks.tools.map((data,index)=>{
                return(
                    
                        <li key={index}>
                            <>{data.icon}</>
                            <Link>{data.label}</Link>
                        </li>
                    
                )
            })}
        </nav>

        <nav className="settings">
             <p>Settings</p>
            {navlinks&&navlinks.settings.map((data,index)=>{
                return(
                    
                        <li key={index}>
                            <>{data.icon}</>
                            <Link>{data.label}</Link>
                        </li>
                    
                )
            })}
        </nav>
        </div>
    )
}

export default SideNavbar