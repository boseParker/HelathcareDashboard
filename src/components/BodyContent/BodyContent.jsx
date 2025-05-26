import './BodyContent.css'
import BodySection from "../BodySection/BodySection";
import SearchBar from "../Searcbar/SearchBar"
const BodyContent=({bodypart})=>{
    return(
        <div className="body-content">
            <SearchBar className="search-component"/>
            <BodySection className="bodySection-component" bodypart={bodypart}/>
        </div>
    )
}

export default BodyContent;