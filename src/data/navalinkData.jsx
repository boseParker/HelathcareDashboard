import { BsUiChecksGrid } from "react-icons/bs";
import { RiArrowUpDownFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { PiChartLineFill } from "react-icons/pi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export const navlinks = {
  general: [
    { label: "Dashboard", icon: <BsUiChecksGrid /> ,status:"active"},
    { label: "History", icon: <RiArrowUpDownFill />,status:'' },
    { label: "Calendar", icon: <FaCalendar /> ,status:''},
    { label: "Appointments", icon: <FiFilePlus />,status:'' },
    { label: "Statistics", icon: <PiChartLineFill />,status:'' }
  ],
  tools: [
    { label: "Chat", icon: <IoChatbubbleEllipsesSharp/>,status:'' },
    { label: "Support", icon: <MdLocalPhone/>,status:'' }
  ],
  settings: [
    { label: "Settings", icon: <IoMdSettings/>,status:'' }
  ]
};
