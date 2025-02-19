import React from 'react'
import styled from 'styled-components'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <FooterStyle id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nesciunt et amet laboriosam accusamus quisquam. Temporibus ut quam debitis doloribus!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 9824637481</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved.
      </p>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.div`

`;