import { FaBars } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import './MainNav.css';
import { Link } from 'react-router-dom';
import {useContext, useRef} from 'react';
import {CartContext} from '../ContextApiFolder/CartContext';

function MainNav(){

 //This is for the hamburger navbar
    const ref = useRef();

    const show = () => {
        ref.current.style.display = 'flex';
        ref.current.style.top = '0';
    }

    const cancel = () => {
        ref.current.style.top = '-100%';
    }

//Code for Hamburger navbar ends...


//This is for the useContext. We want to get the munber of stuff in the cart.
    
const {foodItem, setFoodItem} = useContext(CartContext)

    return(
        <div>
            <nav>
                <div className="logo" >
                    {/* when the <FaCartPlus /> is clicked, it route to the  order body page */}
                    <Link to="/OrderBody" className="link"> <FaCartPlus /> {foodItem.length} </Link>
                </div>

                
                <div className="openMenu">
                        <FaHamburger onClick={show}/>
                </div>

               
                <ul className="mainMenu" ref={ref} >
                    <li><a href="#"><FaLocationArrow className="mainMenuIcon"/></a></li>
                    <li><a href="#"><FaBars className="mainMenuIcon"/></a></li>
                    <div className="closeMenu"><FaTimes onClick={cancel}/></div>
                </ul>
              
            </nav>


        </div>
    )
}

export default MainNav;