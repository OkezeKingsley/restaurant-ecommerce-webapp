//This is the housing component for the whole Order componets
import './Order.css'
import OrderBody from "../OrderBodyFolder/OrderBody";
import OrderHead from "../OrderHeadFolder/OrderHead";
import OrderFooter from '../OrderFooterFolder/OrderFooter';
import { CartContext } from '../../ContextApiFolder/CartContext';
import {useState} from 'react'
import {useContext} from 'react'



function Order(){

    const {foodItem, setFoodItem} = useContext(CartContext) //from the useContext api
        
    return(

        <div>

            <div className="OrderContainer">

                <OrderHead />
        
                
                 <div className="OrderScrollableContainer">
                      <OrderBody /> 
                </div>
                
                <CartContext.Provider value={{foodItem, setFoodItem}}>  
                     <OrderFooter />
                </CartContext.Provider>
                
            </div>

 
        </div>
        
    )
}

export default Order;