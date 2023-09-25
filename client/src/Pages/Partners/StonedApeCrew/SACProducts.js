import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/sac-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
import { collectionToContractAddress } from '../../../API/FloorPrice/CollectionsInfo';
import axios from 'axios';

export default function SACProducts() {
  const [floorPrice, setFloorPrice] = useState(null);
  const collectionName = "brozo";
  const contractAddress = collectionToContractAddress[collectionName];

  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        console.log(`Fetching floor price for contract address: ${contractAddress}`);
        const response = await axios.get(`/api/floorPrices/${contractAddress}`);
        const data = response.data;
        console.log("API Response:", data);
        setFloorPrice(data.floorPrice);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFloorPrice();
  }, [contractAddress]);


  return (
    <div className="global-products-container">
      <div className="collection-banner">
        <img src="../../../images/banner-brozo.webp" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/logo-brozo.webp" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>Brozo</h2>
            <div className="container-icones">
              <a href="http://discord.gg/stonedapecrew" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://twitter.com/StonedApeCrew" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.stonedapecrew.com/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">BROZO is a movement, aiming to create the biggest & best web3 native brands in the world through art and culture.</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            {floorPrice !== null ? <FloorPrice floorPrice={floorPrice} /> : <p>Loading floor price...</p>}
          </div>
          <div className="collection-supply">
            <p>Supply: 8008</p>
          </div>
        </div>
      </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/brozo/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.webp`}
                    alt="products"
                  />
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
      </div>
      <Footer className="footer" />
    </div>
  );
}
