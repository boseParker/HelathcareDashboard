import { useState } from "react";
import { Link } from "react-router-dom";
import './SideNavbar.css';

const SideNavbar = ({ navlinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* Toggle Button - stays outside sidebar */}
      <div className={`toggle-btn ${isOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Close Icon inside sidebar */}
        <div className="close-btn" onClick={toggleSidebar}>✕</div>

        <h2><span className="highlight">Health</span> care.</h2>

        <nav className="general">
          <p>General</p>
          {navlinks?.general.map((data, index) => (
            <li key={index} className={data.status}>
              {data.icon}
              <Link to="#">{data.label}</Link>
            </li>
          ))}
        </nav>

        <nav className="tools">
          <p>Tools</p>
          {navlinks?.tools.map((data, index) => (
            <li key={index}>
              {data.icon}
              <Link to="#">{data.label}</Link>
            </li>
          ))}
        </nav>

        <nav className="settings">
          <p>Settings</p>
          {navlinks?.settings.map((data, index) => (
            <li key={index}>
              {data.icon}
              <Link to="#">{data.label}</Link>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideNavbar;
