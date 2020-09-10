import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  // const TotalPrice = () => {
  //   let price = 0;
  //   basket.forEach((item) => {
  //     price += item.price;
  //   });
  //   return price === 0 ? 0 : "$" + price.toFixed(2);
  // };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                {/* part of the homework */}
                Subtotal ({basket?.length} items):{" "}
                <strong>
                  {/* <TotalPrice /> */}
                  {value}
                </strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
