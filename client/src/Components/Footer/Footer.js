import React, { useState } from 'react';
import "./Footer.css";
import myLogo from "../../images/logo.svg";


const Footer = () => {

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mettre ici le code pour l'envoi de l'email promotionnel
  }
  const imgUrl = `${myLogo}?${new Date().getTime()}`;

  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="col col-left">
            <img className='logo-footer' src={imgUrl} alt="logo" />
            <p>&copy; Ogronex</p>
            <p>All rights reserved</p>
            <div className="social-icons partner-icon social-icons-mobile">
              <a href="https://discord.gg/fRgWtfj2wd" target="_blank" rel="noreferrer"><i className="fab fa-discord discord"></i></a>
              <a href="https://twitter.com/OryonMerch" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
            </div>
          </div>
          <div className="col col-right">
            <ul>
              <li><a href="/privacy-policy">Privacy policy</a></li>
              <li><a href="/shipping-policy">Shipping policy</a></li>
              <li><a href="/terms-and-conditions">Terms and conditions</a></li>
            </ul>
          </div>
          <div className="col col-bottom">
            <h3>Get our latest updates!</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="your@email.com" value={email} onChange={handleEmailChange} className='email-input' />
              <button className='register-btn' type="submit">Join</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
