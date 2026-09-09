import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import flower from '../assets/flower.jpg';
import '../Style/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
     
      <div className="footer-bg" style={{ backgroundImage: `url(${flower})` }}></div>

     
      <div className="footer-overlay"></div>

      <div className="footer-content">
        <h2 className="footer-logo">OB.</h2>

        <div className="footer-item">
          <FaPhone className="footer-icon" />
          <h4>Contact Us :</h4>
          <p>+2014583698</p>
        </div>

        <div className="footer-item">
          <MdEmail className="footer-icon" />
          <h4>Email:</h4>
          <p>Blooms@gmail.com</p>
        </div>

            <p className="text-sm text-white  mt-20">
                © 2026 All Rights Reserved.
            </p>
      </div>
    </footer>
  );
}