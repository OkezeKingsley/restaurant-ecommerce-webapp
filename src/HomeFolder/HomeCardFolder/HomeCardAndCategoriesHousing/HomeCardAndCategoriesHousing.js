//This is HomeCard and Categories housing component
import HomeCategories from '../HomeCategoriesFolder/HomeCategories';
import HomeCard from "../HomeCardFolder/HomeCard";
import './HomeCardAndCategoriesHousing.css';

import image1 from '../HomeCardFolder/HomeCardImg/HomeCard1.jpg';
import image2 from '../HomeCardFolder/HomeCardImg/HomeCard2.jpg';
import image3 from '../HomeCardFolder/HomeCardImg/HomeCard3.jpg';
import image4 from '../HomeCardFolder/HomeCardImg/HomeCard4.jpg';
import image5 from '../HomeCardFolder/HomeCardImg/HomeCard5.jpg';
import image6 from '../HomeCardFolder/HomeCardImg/HomeCard6.jpg';
import image7 from '../HomeCardFolder/HomeCardImg/HomeCard7.jpg';
import image8 from '../HomeCardFolder/HomeCardImg/HomeCard8.jpg';
import image9 from '../HomeCardFolder/HomeCardImg/HomeCard9.jpg';
import image10 from '../HomeCardFolder/HomeCardImg/HomeCard10.jpg';
import image11 from '../HomeCardFolder/HomeCardImg/HomeCard11.jpg';
import image12 from '../HomeCardFolder/HomeCardImg/HomeCard12.jpg';
import image13 from '../HomeCardFolder/HomeCardImg/HomeCard13.jpg';
import image14 from '../HomeCardFolder/HomeCardImg/HomeCard14.jpg';
import image15 from '../HomeCardFolder/HomeCardImg/HomeCard15.jpg';


import { v4 as uuid } from 'uuid';
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HomeCardAndCategoriesHousing(){
   

    return(
        <div>
            
            <HomeCategories />

        <div className="wrapper">
                <HomeCard 
                img={image1} 
                name="First food"
                description="let just call it first food for now, let just call is first food" 
                className="CardGrid"
                price={2500}
                ids={uuid()}/>

                <HomeCard img={image2} 
                name="Second food" 
                description="let just call it second food for now" 
                className="CardGrid"
                price={3000}
                ids={uuid()}/>

                <HomeCard img={image3} 
                name="Third food" 
                description="let just call it third food for now"
                className="CardGrid"
                price={1500}
                ids={uuid()}/>

                <HomeCard img={image4} 
                name="Fouth food" 
                description="let just call it fourth food for now"
                className="CardGrid"
                price={1650}
                ids={uuid()}/>

                <HomeCard img={image5} 
                name="Fifth food" 
                description="let just call it fifth food for now"
                className="CardGrid"
                price={1000}
                ids={uuid()}/>

                <HomeCard img={image6} 
                name="Sixth food" 
                description="let just call it sixth food for now"
                className="CardGrid"
                price={1000}
                ids={uuid()}/>

                <HomeCard img={image7} 
                name="Seventh food" 
                description="let just call it seventh food for now"
                className="CardGrid"
                price={1600}
                ids={uuid()}/>

                <HomeCard img={image8} 
                name="Eight food" 
                description="let just call it eight food for now"
                className="CardGrid"
                price={1700}
                ids={uuid()}/>

                <HomeCard img={image9} 
                name="Nineth food" 
                description="let just call it nineth food for now" 
                className="CardGrid"
                price={1200}
                ids={uuid()}/>

                <HomeCard img={image10} 
                name="Tenth food" 
                description="let just call it tenth food for now" 
                className="CardGrid"
                price={2200}
                ids={uuid()}/>

                <HomeCard img={image11} 
                name="Eleventh food" 
                description="let just call it eleventh food for now"
                className="CardGrid"
                price={1700}
                ids={uuid()}/>

                <HomeCard img={image12} 
                name="Twelth food" 
                description="let just call it twelveth food for now"
                className="CardGrid"
                price={2500}
                ids={uuid()}/>

                <HomeCard img={image13} 
                name="Thirteenth food" 
                description="let just call it thirteenth food for now"
                className="CardGrid"
                price={1300}
                ids={uuid()}/>

                <HomeCard img={image14} 
                name="Fourteenth food" 
                description="let just call it fourteenth food for now"
                className="CardGrid"
                price={1700}
                ids={uuid()}/>

                <HomeCard img={image15} 
                name="Fifteenth food" 
                description="let just call it fifteenth food for now"
                className="CardGrid"
                price={1250}
                ids={uuid()}/>


            </div>

            {/*This only display on smaller screen*/}
            <div style={{textAlign:'center'}}>
                <Link to="/OrderBody"><button className="move-to-cart">Move to cart <FaShoppingBasket className="shopping-basket"/></button></Link>
            </div>
        </div>
    )
}

export default HomeCardAndCategoriesHousing;