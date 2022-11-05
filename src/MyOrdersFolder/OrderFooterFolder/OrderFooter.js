/*This is the component for the my order button that links you to the address page after you have fill your order
  and click on the "head to check out" button */
import './OrderFooter.css';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../ContextApiFolder/CartContext';

function OrderFooter(){

    //This leads to the delivery page when the "Head To Checkout" button is clicked
    const history = useHistory();

    const goToDeliveryAddress = () => {

        if(foodItem.length > 0){

            history.push('/DeliveryAddress')

        } else { alert('Add at least one item to cart')}
        
    }

     //This is for calculating the total prices in the list.
     const {foodItem, setFoodItem} = useContext(CartContext) //from the useContext api

    let total = 0;

    foodItem.forEach(item => {
       total = total + item.prices;
    })
   

    return(
        <div>
            {/*this is where the total calculation of your order get displayed*/}

             <p style={{fiontSize: '70px', fontWeight: 'bold', paddingTop: '30px'}}>TOTAL: N{total}</p>
            {/*this button leads you to checkout after filling your order*/}
            <button className="OrderFooterBtn" onClick={goToDeliveryAddress}>Head to Checkout</button>

        </div>
    )
}

export default OrderFooter;