
import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(){

    const [{basket}, dispatch] = useStateValue();

    return(
        <div>
            <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout_ad"
                        src="https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg"
                        alt=""/>
                    <div>
                        <h2 className="checkout_title">
                            장바구니 입니다.
                        </h2>

                        {
                            basket.map(item => (
                                <CheckoutProduct id={item.id} title = {item.title} image = {item.image}
                                price = {item.price} rating = {item.rating}/>
                            ))
                        }

                    </div>

                </div>

                <div className="checkout_right">
                    <Subtotal/>
                </div>

        
            </div>
        </div>
    );
}

export default Checkout;