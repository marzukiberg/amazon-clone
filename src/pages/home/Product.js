import React from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product lax" key={id} data-lax-preset="fadeIn">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>🌟</p>;
            })}
        </div>
      </div>

      <img src={image} alt="Product Image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
