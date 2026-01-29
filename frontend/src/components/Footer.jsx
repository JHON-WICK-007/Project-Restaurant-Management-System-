import "./Footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* BRAND + SUBSCRIBE */}
        <div className="footer-col">
          <h3 className="footer-logo">ROYAL DINING</h3>

          <p className="footer-label">SUBSCRIBE FOR LATEST UPDATES</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button>SUBSCRIBE</button>
          </div>

          <p className="footer-label">FOR BOOKINGS</p>
          <p className="footer-text">+91 80000 12345</p>

          <p className="footer-label">CUSTOMER SUPPORT</p>
          <p className="footer-text">support@royaldining.com</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Dining</li>
            <li>Reservations</li>
            <li>Private Events</li>
            <li>Chef’s Specials</li>
            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Offers</li>
            <li>Gift Cards</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* CONNECT WITH US */}
        <div className="footer-col">
          <h4>CONNECT WITH US</h4>

          <div className="connect-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              data-link="facebook.com"
            >
              <img src="/footer/facebook.svg" alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              data-link="instagram.com"
            >
              <img src="/footer/instagram.svg" alt="Instagram" />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              data-link="youtube.com"
            >
              <img src="/footer/youtube.svg" alt="YouTube" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-link="linkedin.com"
            >
              <img src="/footer/linkedin.png" alt="LinkedIn" />
            </a>

            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              data-link="x.com"
            >
              <img src="/footer/x.svg" alt="X" />
            </a>
          </div>
        </div>
      </div>

      {/* BRANDS & AFFILIATIONS */}
      <div className="footer-brands-title">
        <h4>BRANDS & AFFILIATIONS</h4>
      </div>

      {/* OUR BRANDS */}
      <div className="footer-brands">
        <a href="https://brand1.com" target="_blank" rel="noreferrer">
          <img src="footer/brand1.png" alt="Brand 1" />
        </a>

        <a href="https://brand2.com" target="_blank" rel="noreferrer">
          <img src="footer/brand2.png" alt="Brand 2" />
        </a>

        <a href="https://brand3.com" target="_blank" rel="noreferrer">
          <img src="footer/brand3.png" alt="Brand 3" />
        </a>

        <a href="https://brand4.com" target="_blank" rel="noreferrer">
          <img src="footer/brand4.png" alt="Brand 4" />
        </a>

        <a href="https://brand5.com" target="_blank" rel="noreferrer">
          <img src="footer/brand5.png" alt="Brand 5" />
        </a>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Royal Dining Group. All Rights Reserved.</p>

        <div className="footer-links">
          <span>Corporate</span>
          <span>Pressroom</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;