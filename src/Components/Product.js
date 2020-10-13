import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, price, rating, image }) {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = () => {
    if (!user) {
      history.push("/login");
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        payload: {
          id,
          title,
          price,
          rating,
          image,
        },
      });
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        {title?.length > 35 ? (
          <p>{title.substring(0, 31) + "..."}</p>
        ) : (
          <p>{title}</p>
        )}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="product__star" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
