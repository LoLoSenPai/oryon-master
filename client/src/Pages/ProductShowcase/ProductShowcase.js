import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductShowcase.css";
import inventory from "../../data/inventory";
import Footer from "../../Components/Footer/Footer";

export default function ProductShowcase() {
  const [nbMugs, setNbMugs] = useState(1);

  const { id } = useParams();

  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  const updateMugs = (e) => {
        setNbMugs(Number(e.target.value));
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch()

  const addToCart = e => {
    e.preventDefault()

    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbMugs
    }

    dispatch({
      type: "ADDITEM",
      payload: itemAdded
    })
    
    addingInfo.current.innerText = "Ajouté au panier"

    if(display){
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 500)
    }
  }

  useEffect(() => {
      return () => {
        clearTimeout(timerInfo)
      }
  }, [timerInfo])

  return (
    <div className="global-product-container">
      <div className="showcase">
        <div className="container-img-showcase">
          <img
            className="img-showcase"
            src={
              process.env.PUBLIC_URL +
              `/images/${inventory[productClicked].img}.webp`
            }
            alt=""
          />
        </div>
        <div className="product-infos">
          <h2>{inventory[productClicked].title}</h2>
          <p>Prix: {inventory[productClicked].price}$</p>
          <form onSubmit={addToCart}>
            <label htmlFor="quantity" className="qty-label">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={nbMugs}
              onChange={updateMugs}
            />
            <button className="add-to-cart-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Add to cart
            </button>
            <span 
            ref={addingInfo}
            className="adding-info"></span>
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
