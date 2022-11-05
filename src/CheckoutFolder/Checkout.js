//This is the checkout component
/*Here we're implementing Paystack's payment API. Checkout Paystack React payment Api for more...*/

import './Checkout.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';//Here we import PaystackButton so we can accept payment when a user clicks the pay button.
import { FaAngleDoubleLeft } from "react-icons/fa"
function Checkout(){

    const publicKey = "pk_test_e5ef6c2d4da370fbed";//we input our API public key here.
    const amount = 100000;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const componentProps = {
        email,//Our customer's email.
        amount,//This is the amount we're charging.
        metadata: {
            name,
            phone,
        },
        publicKey,//Our Paystack public key
        text: "Pay Now",//This is the text that you want to display on your button.
        onSuccess: () => 
            alert("Thanks for doing business with us! " ),//This fires when the payment is successful.
            onClose: () => alert("wait Don't leave yet :("),//This fires a new page when the payment is successful.

    }

    const history = useHistory()
    const back = () => {
        history.push('/DeliveryAddress')
    }

    return(

        <div className="container" id="check">
       
        <div className="Checkout-body">

             <div className="Checkout-form">

             <button className="backBtn" onClick={back}> <FaAngleDoubleLeft /> </button>

                <h5 className="CheckoutHead">Your Checkout page</h5>

                <div className="CheckoutDiv">
                    <div className="Checkout-grid">
                        <label className="label">Payer's name:</label> 
                        <input type="text"
                        placeholder="    Enter name" className="input"
                        id="name"
                        onChange={(e) => setName(e.target.value)}/>
                     </div>   
                </div>

                <div className="CheckoutDiv">
                     <div className="Checkout-grid">
                        <label className="label">Payer's mail</label> 
                        <input type="email" 
                        placeholder="    e.g something@email.com" className="input"
                        id="name"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="CheckoutDiv">
                    <div className="Checkout-grid">
                        <label className="label">Payer's number</label> 
                        <input type="number" className="input"placeholder="    e.g 08000000000" 
                        id="name"
                        onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>

                <PaystackButton className="paystack-button" {...componentProps} />
            </div>

        </div>

        </div>
    )
}

export default Checkout;

/*  
    KEY NOTES:
    <PaystackButton /> : This submits our form to paystack so they can handle the payment processes.
    There are a few parameters we can pass to the button but the required ones are:
            - email
            - amount
            - publicKey
            - text
            - onSuccess
            - onClose

    Optionally, we can pass a transaction reference and a metadata object. If you don't pass a reference,
    paystack will just generate one for you. If you choose to geenerate your own reference, you'll need to
    make sure that every reference is unique. The metadata object lets you store any additional information
    you would like for a transaction. Here, we'll be passing the customer's name and phone number in our 
    metadata. We'll put all of this in a componentProps object that we'll pass to the paystackButton component

*/