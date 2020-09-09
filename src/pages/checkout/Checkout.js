import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { Helmet } from "react-helmet";

function Checkout() {
  return (
    <div className="checkout">
      <Helmet title="Checkout | Amazon Clone" />

      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
