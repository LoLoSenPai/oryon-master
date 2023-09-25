import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import inventory from "../../data/inventory.js";
import Footer from "../../Components/Footer/Footer";

export default function Products() {
  return (
    <div className="global-products-container">
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/produits/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
              <div className="bloc-card">
                  <div className="product-card">
                      <div className="visual-aspect">
                          <img 
                          className="img-product"
                          src={process.env.PUBLIC_URL + `/images/${item.img}.webp`} 
                          alt="produit" />
                      </div>
                      <div className="info">
                          <p>{item.title}</p>
                          <p>Price : {item.price} $</p>
                      </div>
                  </div>
                  <div className="back-card"></div>
              </div>
          </Link>
        ))}
        <Footer />
      </div>
    </div>
  );
}
