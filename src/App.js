import './App.css';
import Home from './HomeFolder/WholeHomeHousingComponent/Home';
import Order from './MyOrdersFolder/WholeOrderHousingComponent/Order';
import MainNav from './NabarFolder/MainNav.js';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DeliveryAddress from './DeliveryAddressFolder/DeliveryAddress'
import Checkout from './CheckoutFolder/Checkout';
import { CartContext } from './ContextApiFolder/CartContext';
import { useState } from 'react';




import OrderBody from './MyOrdersFolder/OrderBodyFolder/OrderBody'; /*importing this just only for routing on smaller screens */
import HomeCardAndCategoriesHousing from './HomeFolder/HomeCardFolder/HomeCardAndCategoriesHousing/HomeCardAndCategoriesHousing';


function App() {

  const [foodItem, setFoodItem] = useState([])//This is for the add to cart and it context api

  return(
    <Router>

      <div className="AppContainer">

      <CartContext.Provider value={{foodItem, setFoodItem }}>  

            <div className="MainNav">
              <MainNav />
            </div>
            

            <Switch>
            <Route exact path="/">
                <Home className="Home"/>
            </Route> 

            <Route exact path="/OrderBody" >
                      <OrderBody />       
              </Route>
   
            <Route exact path="/HomeCardAndCategoriesHousing">
                <HomeCardAndCategoriesHousing />
            </Route> 


                <Route exact path="/DeliveryAddress">
                    <DeliveryAddress />
                </Route>

                <Route exact path="/Checkout">
                      <Checkout />
                </Route>
            </Switch>

            <Order className="Order" />
  
            </CartContext.Provider>

      </div>

     </Router>
  )

}

export default App;


/*  

  NOTE: 

  *The Route, switch tag are used for routing to another page when someone visit or use that paticular route path.
  We use the Router tag to cover all the tag so that every component can have access to the routing feature if we
  want to add it to them.

  *We're wrapping all the components because we want the data of the value property to be available every where in
  our application. Right from Nav to Home to Order etc.



*/