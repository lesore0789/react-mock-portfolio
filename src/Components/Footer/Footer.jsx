/* eslint-disable react/no-unescaped-entities */
import './Footer.css'
import footerLogo from '../../assets/footer_logo.svg'
import userIcon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="" />
          <p>I'm a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple</p>
        </div>
        <div className="footer-top right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 L. Orellana. All Rights Reserved. </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
