//Component from the search bar at the Home component
import { FaSearchengin } from 'react-icons/fa';
import './HomeInput.css'

function HomeInput(){
    return(
        <div className="HomeInputContainer">
            <input type="text" placeholder="search your choice. . ."></input>
            <button className="homeInputBtn"><FaSearchengin /></button>
        </div>
    )
}

export default HomeInput;