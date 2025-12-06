import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">cyber</h2>
          <p className="footer-description">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Bonus program</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Credit and payment</a></li>
            <li><a href="#">Service contracts</a></li>
            <li><a href="#">Non-cash account</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Assistance to the buyer</h3>
          <ul>
            <li><a href="#">Find an order</a></li>
            <li><a href="#">Terms of delivery</a></li>
            <li><a href="#">Exchange and return of goods</a></li>
            <li><a href="#">Guarantee</a></li>
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Terms of use of the site</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="social-icon">🐦</a>
        <a href="#" className="social-icon">📘</a>
        <a href="#" className="social-icon">🔗</a>
        <a href="#" className="social-icon">📷</a>
      </div>
    </footer>
  );
}

export default Footer;  