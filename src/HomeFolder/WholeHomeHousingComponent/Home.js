//housing component from the whole component that make up the home component
import './Home.css';
import HomeInput from '../HomeInputFolder/HomeInput';
import HomeCarousel from '../HomeCarouselFolder/HomeCarousel';
import HomeCardAndCategoriesHousing from '../HomeCardFolder/HomeCardAndCategoriesHousing/HomeCardAndCategoriesHousing';
import { CartContext } from '../../ContextApiFolder/CartContext';
import {useState} from 'react';


function Home(){

   
    return(
        <div >
          
            <HomeInput />

            <HomeCarousel />

            <div className="mini-container">

                <HomeCardAndCategoriesHousing />

            </div>

        </div>
    )
}

export default Home;