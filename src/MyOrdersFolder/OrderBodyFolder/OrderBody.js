//This is the component where all you add to cart will show.
import { useContext, useState } from 'react';
import { CartContext } from '../../ContextApiFolder/CartContext';
import './OrderBody.css'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function OrderBody(){

  const {foodItem, setFoodItem} = useContext(CartContext)


  //This function is for removing list item in the cart.
  const removeList = ( id ) => {

    const newList = foodItem.filter((l) => l.id !== id );
    setFoodItem(newList)//This refresh the list in the array.

  }


  //This function is for calculating total prices in the list.
 
  let total = 0;

  foodItem.forEach(item => {
      total += item.prices;
  })



    return(
        <div className="OrderBodyContainer">

            {foodItem.map((val) => (

                    <div className="OrderBodyCard" key={val.id}>

                        <img src={val.images} width={150} id="img"></img>

                        <h4 className="name">{val.name}</h4>

                        <p className="desc">{val.desc}</p>

                        <p className="price">PRICE: N{val.prices}</p>

                        <p style={{display:'none'}}>{val.id}</p>
                        
                        <button id="btn" onClick={( ) => {
                          
                          removeList(val.id) //this pass the card id as argument to the parameter of removeList
                          
                        }}>Remove <FaTrash /></button>  

                    </div>
              ))}


              {/*THIS SHOULD ONLY DISPLAY WHEN IT'S ON SMALLER SCREEN*/}
              <div className="go-to-down">
              <p style={{fiontSize: '70px', fontWeight: 'bold', paddingTop: '30px'}}>TOTAL: N{total}</p>
              <Link to="/DeliveryAddress"><button className="go-to-pay">Head to pay</button></Link>
              </div>

        </div> 
    )
}
export default OrderBody;