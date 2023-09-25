import React from 'react';
import './Collections.css';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import collectionsData from './collectionsData.json';

export default function Collections() {
  return (
    <div className="global-collections-container">
      <div className="intro-collections">
        <h2 className='title-collections'>Collections</h2>
        <p className='text-info-collections'>You can see here all our official shops</p>
      </div>
      <div className="collections-container">
        {collectionsData.map(collection => (
          <div key={collection.title} className={`collection-container collection-container-${collection.title.toLowerCase().replace(/\s/g, '_')}`}>
            <div className={`card-content-container card-content-container-${collection.title.toLowerCase().replace(/\s/g, '_')}`}>
              <img className='banner-profile' src={collection.bannerImgSrc} alt="" />
              <img className='logo-profile' src={collection.logoImgSrc} alt="" />
              <h3 className='title-profile'>{collection.title}</h3>
              <div className={`overlay-card-content overlay-card-content-${collection.title.toLowerCase().replace(/\s/g, '_')}`}></div>
            </div>
            <Link to={collection.link}> 
              <div className={`collection-card-content collection-card-content-${collection.title.toLowerCase().replace(/\s/g, '_')}`}>
                <h3 className='title-profile title-profile-hover'>{collection.title}</h3>
                <span className='collection-link'>See store</span>
              </div>
              <img className={`preview-nft-content preview-nft-content-${collection.title.toLowerCase().replace(/\s/g, '_')}`} src={collection.previewImgSrc} alt="NFT preview" />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
