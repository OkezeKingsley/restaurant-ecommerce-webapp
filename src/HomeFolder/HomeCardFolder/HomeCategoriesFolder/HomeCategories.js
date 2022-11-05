//This is the component for the categories section
import { FaBuffer } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSyncAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import './HomeCategories.css';


function HomeCategories(){
    return(
        <div>
            <ul className="categories-ul">
                <li><FaBuffer className="icon"/>All</li>
                <li><FaMapMarkerAlt className="icon"/>Nearby</li>
                <li><FaSyncAlt className="icon"/>Newcomers</li>
                <li><FaStar className="icon"/>Most asked for</li>
                <li><FaRocket className="icon"/>Top Rated</li>
            </ul>

        </div>
    )
}

export default HomeCategories;