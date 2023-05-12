import React from 'react'
import "./footer.css";
export default function Footer() {
  return (
    <div>
          <footer>
        <div className="footer-container">
            <div className="sec aboutus">
                <h2>About Us</h2>
                <p>trending topics we can the best employers that love to be creative and give time to make the products perfectly , the price of our products is the best for you to get a perfect product with a perfect price, we make different products but the most of it is from rafia and smarand,
</p>
                <ul className="sci">
                    <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                    <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="sec quicklinks">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className="sec contactBx">
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><i className='bx bxs-map'></i></span>
                        <span>6444 Muhammed 6 street <br/> Mhamid PA 33445 <br/> Maroc</span>
                    </li>
                    <li>
                        <span><i className='bx bx-envelope' ></i></span>
                        <p><a href="blogchaine.com">blogchaine@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
  )
}
