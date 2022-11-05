//Component for the structure of the card at the homepage
import './HomeCard.css';

import {useContext} from 'react';
import {CartContext} from '../../../ContextApiFolder/CartContext';


function HomeCard( props ){

    const image = props.img;
    const names = props.name;
    const descriptions = props.description;
    const pri = props.price;
    const i = props.ids;

    const {foodItem, setFoodItem} = useContext(CartContext) //from context api

    const send = () => {
        setFoodItem((prevState) => [...prevState, {images: image, name: names, desc: descriptions, prices: pri, id: i }])
     }


    return(
      
      <div>
           
          <div className="card" >
              <div className="card-body">
                 <img src={props.img} width={250} height={220} className="card-img"/>  
                <h2 className="card-title">{props.name}</h2>
                <p className="card-description">{props.description}</p>    
                <p className="card-price">PRICE: N{props.price}</p>
                <p style={{display:'none'}}>{props.ids}</p>
              </div>
             <button className="card-btn" onClick={send}>Add to Cart</button>  
        </div>


      </div>

    );
}

export default HomeCard;