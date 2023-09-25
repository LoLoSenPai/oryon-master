import React from 'react'
import './Home.css'
import imgHomeShop from '../../Images/3D-Logo.webp'
import bannerAd from './Soon-image.webp'
import bannerAdMobile from './Soon-image-mobile.webp'
import Footer from '../../Components/Footer/Footer';


function Home() {

  setTimeout(() => {
    document.querySelector('.banner-r img').classList.add('show');
  }, 1000);

  return (
    <div className="global-home-container">
      <div className="hero-banner">
        <div className="banner-l">
          <h1>Bring your NFTs to life</h1>
          <hr className='separation' />
          <p>
            Get customized merchandise with your favorite NFT thanks to our all-in-one platform. We take care of everything.
          </p>
          <ul>
            <li><i className="fa-solid fa-chevron-right"></i>Easy</li>
            <li><i className="fa-solid fa-chevron-right"></i>Fast</li>
            <li><i className="fa-solid fa-chevron-right"></i>Best Quality</li>
          </ul>
          <div className="button-l">
            <a href='/Collections'>
              <button className="btn-hero-banner">Start Now</button>
            </a>
          </div>
        </div>
        <div className="banner-r">
          <img className="hero-right" src={imgHomeShop} alt="accueil shop" />
        </div>
      </div>
      <div className="partner-banner">
        <div className="banner-title">
          <h2>Large projects trust us</h2>
        </div>
        <div className="partner-container">
          <div className="large-project partner-icon">
            <img className='gray-icon'src="./images/logo-drillclub.webp" alt="" />
            <h3>Drill Club</h3>
            <a href="https://twitter.com/degendummies" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
          </div>
          <div className="large-project partner-icon">
            <img className='gray-icon'src="./images/logo-brozo.webp" alt="" />
            <h3>Brozo</h3>
            <a href="https://twitter.com/StonedApeCrew" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
          </div>
          <div className="large-project partner-icon">
            <img className='gray-icon' src="./images/logo-polygonmonkeys.webp" alt="" />
            <h3>PolygonMonkeys</h3>
            <a href="https://twitter.com/OryonMerch" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
          </div>
          <div className="large-project partner-icon">
            <img className='gray-icon' src="./images/logo-theherd.webp" alt="" />
            <h3>The Herd</h3>
            <a href="https://twitter.com/visagesclub" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
          </div>
        </div>
        <div className="banner-title banner-title-bottom">
          <p>More than<span> 140 000 </span>followers combined</p>
        </div>
      </div>
      <div className="banner-announce">
        <img className="coming-soon" src={bannerAd} alt="coming-soon banner" />
        <img className="coming-soon-mobile" src={bannerAdMobile} alt="coming-soon-mobile banner" />
      </div>
      <div className="custom-products">
        <div className="banner-title title-custom-products">
          <h2>Custom products</h2>
        </div>
        <div className="custom-products-container">
          <div className="custom-product">
            <img src="./images/section-clothes.webp" alt="" />
            <h3>Clothes</h3>
          </div>
          <div className="custom-product">
            <img src="./images/section-access.webp" alt="" />
            <h3>Accessories</h3>
          </div>
          <div className="custom-product">
            <img src="./images/section-home.webp" alt="" />
            <h3>Home style</h3>
          </div>
        </div>
      </div>
      <div className="featured-products">
        <div className="banner-title title-featured-products">
          <h2>Featured products</h2>
        </div>
        <div className="featured-products-container">
          <div className="featured-product">
            <img src="./images/NH1-1.webp" alt="" />
            <h4>Hoodie Neo Hunter</h4>
            <p>
              From USD 19.95 $
            </p>
          </div>
          <div className="featured-product">
            <img src="./images/hoodie-photo.webp" alt="" />
            <h4>T-shirt Claynosaure</h4>
            <p>
              From USD 19.95 $
            </p>
          </div>
          <div className="featured-product">
            <img src="./images/shirt-photo.webp" alt="" />
            <h4>Hat Moon Bird</h4>
            <p>
              From USD 19.95 $
            </p>
          </div>
          <div className="featured-product">
            <img src="./images/hoodie-photo.webp" alt="" />
            <h4>Mug Doge</h4>
            <p>
              From USD 19.95 $
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

  
export default Home;