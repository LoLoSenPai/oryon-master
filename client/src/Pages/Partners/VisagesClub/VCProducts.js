import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../Products/Products.css";
import inventory from "../../../data/vc-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
import { collectionToContractAddress } from '../../../API/FloorPrice/CollectionsInfo';
import axios from 'axios';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function VCProducts() {
  const [floorPrice, setFloorPrice] = useState(null);
  const collectionName = "the_herd";
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
        <img src="../../../images/banner-theherd.webp" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/logo-theherd.webp" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>The Herd</h2>
            <div className="container-icones">
              <a href="https://discord.gg/visagesclub" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://twitter.com/visagesclub" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://exchange.art/0xddddd/nfts" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">Pioneers of Iced Out Coin Flip. Building THE HERD.</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            {floorPrice !== null ? <FloorPrice floorPrice={floorPrice} /> : <p>Loading floor price...</p>}
          </div>
          <div className="collection-supply">
            <p>Supply: 4261</p>
          </div>
        </div>
      </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/the_herd/${item.title.replace(/\s+/g, "").trim()}`,
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
                  <p>Price : {item.price} $</p>
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
