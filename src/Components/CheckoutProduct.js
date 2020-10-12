import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, rating, price, title, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log(id, rating, price);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <h3 className="checkoutproduct__title">{title}</h3>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="checkoutproduct__star" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutproduct__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
