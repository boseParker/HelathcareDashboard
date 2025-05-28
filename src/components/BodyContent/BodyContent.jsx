import './BodyContent.css'
import BodySection from "./BodySection/BodySection";
import SearchBar from "./Searcbar/SearchBar"
import ActivityChart from './ActivityChart/ActivityChart';
const BodyContent=({bodypart})=>{
    return(
        <div className="body-content">
            <SearchBar className="search-component"/>
            <BodySection className="bodySection-component" bodypart={bodypart}/>
            <ActivityChart/>
        </div>
    )
}

export default BodyContent;