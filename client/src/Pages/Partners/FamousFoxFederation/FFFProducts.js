import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/fff-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
import { collectionToContractAddress } from '../../../API/FloorPrice/CollectionsInfo';
import axios from 'axios';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function FFFProducts() {
  const [floorPrice, setFloorPrice] = useState(null);
  const collectionName = "polygonmonkeys";
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
        <img src="../../../images/banner-polygonmonkeys.webp" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/logo-polygonmonkeys.webp" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>Polygonmonkeys</h2>
            <div className="container-icones">
              <a href="https://discord.gg/famousfoxes" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://twitter.com/famousfoxfed" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://famousfoxes.com/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">Polygon Monkeys introduces iconic monkey art NFTs to Polygon, aiming for a community-focused project reflecting Web3 identity. Offering essential utilities, we'll collaborate with Polygon NFT & De-Fi partners. Join the 4445-piece drop & ride the Purple Wave!</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            {floorPrice !== null ? <FloorPrice floorPrice={floorPrice} /> : <p>Loading floor price...</p>}
          </div>
          <div className="collection-supply">
            <p>Supply: 4443</p>
          </div>
        </div>
      </div>

      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/polygonmonkeys/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.webp`}
                    alt="produit"
                  />
                </div>
                <div className="info">
                  <p>{item.title}</p>
                  <p>Price : {item.price}€</p>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
