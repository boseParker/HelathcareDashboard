import './BodyContent.css'
import BodySection from "./BodySection/BodySection";
import SearchBar from "./Searcbar/SearchBar"
import ActivityChart from './ActivityChart/ActivityChart';
const BodyContent=({bodypart,Activitydata})=>{
    return(
        <div className="body-content">
            <SearchBar className="search-component"/>
            <BodySection className="bodySection-component" bodypart={bodypart}/>
            <ActivityChart className="activitychart-component" Activitydata={Activitydata}/>
        </div>
    )
}

export default BodyContent;