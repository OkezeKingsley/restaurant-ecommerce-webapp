//This is the Delivery address component
import './DeliveryAddress.css';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FaAngleDoubleLeft } from "react-icons/fa";


function DeliveryAddress(){

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [zip, setZipCode] = useState();
//    const [name, setName] = useState();



    const history = useHistory(); 
    const sendDetails = () => {  

            history.push('/Checkout');

        } 
     
    const back = () => {  

        history.push('/');

        }  


    return(
    
        <div className="container">
            
            <form>
               
                <div className="DeliveryHead"> 
                    <div className="h5-icon">
                        <FaAngleDoubleLeft onClick={back}/> 
                    </div>
                    <div className="h5">
                       <h5 style={{fontSize:25, color:'black'}}>Delivery Address</h5>
                    </div>
                 </div>
                    

                <div className="DeliveryDiv">
                    <label className="label">First name:</label> 
                    <input type="text" placeholder="    e.g Doris" 
                    className="input"
                    required
                    onChange={ (e) => { setFirstName(e.target.value) }}
                    />
                </div>

                <div className="DeliveryDiv">
                    <label className="label">Last name</label> 
                    <input type="text" placeholder="    e.g Demarco" 
                    className="input"
                    required
                    onChange={ (e) => { setLastName(e.target.value) }}/>
                </div>

                <div className="DeliveryDiv">
                    <label className="label">Phone number</label> 
                    <input type="number" className="input"
                    placeholder="    e.g 08000000000"
                    required
                    onChange={ (e) => { setPhoneNumber(e.target.value) }} />
                </div>

                <div className="DeliveryDiv">
                    <label className="label">Email</label> 
                    <input type="email" className="input"
                    placeholder="    e.g 08000000000"
                    required
                    onChange={ (e) => { setEmail(e.target.value) }} />
                </div>

                <div className="DeliveryRadio">

                    <input type="radio" className="radioMale" 
                     required/>Male

                    <input type="radio" required/>Female

                </div>

                <div className="DeliveryFlex">

                    <div className="DeliveryFlexDiv">
                        <label className="label">Country</label> 
                        <input type="text" placeholder="    e.g Nigeria" 
                        className="input"
                        required
                        onChange={ (e) => { setCountry(e.target.value) }}/>
                    </div>

                    <div className="DeliveryFlexDiv">
                        <label className="label" >City</label> 
                        <input type="text" placeholder="    e.g Lagos" 
                        className="input"
                        required
                        onChange={ (e) => { setCity(e.target.value) }}/>
                    </div>

                </div>

                <div className="DeliveryDiv">
                    <label className="label">Address</label>
                    <textarea name="message" rows="5" cols="20" 
                    className="textarea"
                    required
                    onChange={ (e) => { setAddress(e.target.value) }} ></textarea>
                 </div>

                <div className="DeliveryDiv">
                     <label className="label">Zipcode</label> 
                      <input type="number" className="input"
                      required
                      onChange={ (e) => { setZipCode(e.target.value) }}/>
                </div>

                <button className="DeliveryBtn" onClick={ sendDetails } >Save</button>

            </form>

        </div>


    )
}

export default DeliveryAddress;