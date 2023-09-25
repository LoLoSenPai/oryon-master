import React, { useEffect } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";

export default function ShoppingCart() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "SET_CART", payload: storedCart });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(storeState.cart));
  }, [storeState.cart]);

  const handleQuantityChange = (event, id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Number(event.target.value),
        };
      } else {
        return item;
      }
    });
    dispatch({ type: "SET_CART", payload: updatedCart });
  };

  const handleRemoveItemClick = (id) => {
    dispatch({ type: "REMOVEITEM", payload: { id } });
  };
  
  

  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  const checkout = async () => {
    await fetch("https://oryon-merch.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: storeState.cart }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <div className="global-container-cart">
      <p className="heading-cart">Your cart :</p>
        <div className={`cart ${storeState.cart.length === 0 ? "cart-empty" : ""}`}>
        <ul className="cart-list">
          {storeState.cart.map((item) => (
            <li key={item.id}>
              <img
                src={process.env.PUBLIC_URL + `/images/${item.img}.webp`}
                alt=""
              />
              <div className="bloc-cart-infos">
                <h4>{item.title}</h4>
                <p>Price: {item.price} $</p>
              </div>
              <div className="bloc-input">
                <label htmlFor={`quantityInput-${item.id}`}>Quantity</label>
                <div className="input-container">
                  <input
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    id={`quantityInput-${item.id}`}
                    type="number"
                    className="qty-label"
                    value={item.quantity}
                  />
                  <button className="remove-btn" onClick={() => handleRemoveItemClick(item.id)}>Remove</button>
                  <button className="remove-btn remove-btn-mobile" onClick={() => handleRemoveItemClick(item.id)}>❌</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      <p className="total-price">Total : {`${totalPrice.toFixed(2)} $`}</p>
      <button className="btn-cart" onClick={checkout}>
        <span></span>
        <span></span>
        <span></span>
        <span></span> Process payment
      </button>
    </div>
  </div>
  );
}