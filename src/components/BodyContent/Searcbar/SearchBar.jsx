import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import './SearchBar.css'
const SearchBar=()=>{
    return(
        <>
            <div className="search_bar">
                <label htmlFor="search_bar">SearchBar</label>
                <div>
                    <IoSearchSharp className="search-icon"/>
                    <input type="text" name="search_bar" placeholder="Search"/>
                </div>
                <FaBell className="bell-icon"/>
            </div>
        </>
    )
}

export default SearchBar