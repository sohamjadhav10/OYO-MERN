import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Download OYO app for exciting offers.</p>
        <div className="app-links">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/app-store.png" alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/google-play.png" alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/teams">Teams / Careers</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/investor-relations">Investor Relations</a></li>
            <li><a href="/circle">OYO Circle</a></li>
            <li><a href="/frames">OYO Frames</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/guest-policies">Guest Policies</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/trust-safety">Trust And Safety</a></li>
            <li><a href="/cyber-security">Cyber Security</a></li>
            <li><a href="/cyber-awareness">Cyber Security Awareness</a></li>
            <li><a href="/responsible-disclosure">Responsible Disclosure</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>OYO Hotels</h4>
          <ul>
            <li><a href="/hotels/near-me">Hotels near me</a></li>
            <li><a href="/hotels/manali">Hotels in Manali</a></li>
            <li><a href="/hotels/nainital">Hotels in Nainital</a></li>
            <li><a href="/hotels/goa">Hotels in Goa</a></li>
            <li><a href="/hotels/mumbai">Hotels in Mumbai</a></li>
            <li><a href="/hotels/delhi">Hotels in Delhi</a></li>
            <li><a href="/hotels/udaipur">Hotels in Udaipur</a></li>
            <li><a href="/hotels/bangalore">Hotels in Bangalore</a></li>
            {/* Add more hotel links as needed */}
          </ul>
        </div>

        <div className="footer-section">
          <h4>International</h4>
          <ul>
            <li><a href="/oyo-hotel-uk">OYO Hotel UK</a></li>
            <li><a href="/oyo-hotel-usa">OYO Hotel USA</a></li>
            <li><a href="/oyo-hotel-mexico">OYO Hotel Mexico</a></li>
            <li><a href="/oyo-hotel-brasil">OYO Hotel Brasil</a></li>
            <li><a href="/oyo-hotel-indonesia">OYO Hotel Indonesia</a></li>
            <li><a href="/oyo-vacation-europe">OYO Vacation Homes in Europe</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
