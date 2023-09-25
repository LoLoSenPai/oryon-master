import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/dd-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
import { collectionToContractAddress } from '../../../API/FloorPrice/CollectionsInfo';
import axios from 'axios';

export default function DDProducts() {
  const [floorPrice, setFloorPrice] = useState(null);
  const collectionName = "drill_club";
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
        <img src="../../../images/banner-drillclub.webp" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/logo-drillclub.webp" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>Drill Club</h2>
            <div className="container-icones">
              <a href="https://www.discord.gg/CZwjdbQx8m" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://www.twitter.com/degendummies" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://dlab.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">Introducing Drill Club, a vibrant and inclusive community of 6969 Mandrills committed to bringing art back to the forefront of the crypto world. Our mission is to create the perfect RÉ-NAO - a fun, lively place with an inviting vibe that makes you want to be there. Our Drill, Chill, and Vibe culture fosters positivity and inclusivity for everyone. We're excited to offer a free mint on Polygon Blockchain and can't wait to see what the future holds for our community</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            {floorPrice !== null ? <FloorPrice floorPrice={floorPrice} /> : <p>Loading floor price...</p>}
          </div>
          <div className="collection-supply">
            <p>Supply: 3425</p>
          </div>
        </div>
      </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/drill_club/${item.title.replace(/\s+/g, "").trim()}`,
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
