//This is the component for the Order head section.
import './OrderHead.css';
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext }  from '../../ContextApiFolder/CartContext';

function OrderHead(){

    const { foodItem, setFoodItem } = useContext(CartContext) /*from the useContext api */
   
    return(
        <div>
            <div className="OrderHead">

                 <div className="OrderHeadFlex">
                    <div>
                         <h5 className="main-h5">My Orders</h5>
                    </div>
                    
                    <div>
                          <FaCartPlus className="OrderHeadFlexIcon" />{foodItem.length}
                    </div>

                </div>

                <p className="p">Below are what you've added to your cart. </p>
   
            </div>

        </div>

    )
}

export default OrderHead;