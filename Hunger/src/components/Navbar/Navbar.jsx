import React, { useState } from 'react'
import styled from 'styled-components'
import { assets } from '../../assets/frontend_assets/assets'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <NavbarStyle>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contactus</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </NavbarStyle>
  )
}

export default Navbar


const NavbarStyle = styled.div`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
      width: 150px;
    }
    .navbar-menu{
      display: flex;
      list-style: none;
      gap: 20px;
      color: #49557e;
      font-size: 18px;
    }
    .navbar-right{
      display: flex;
      align-items: center;
      gap: 40px;
    }
    button{
      background: transparent;
      font-size: 16px;
      color: #49557e;
      border: 1px solid tomato;
      padding: 10px 30px;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover{
      background-color: #fff4f2;
    }

    .active{
      padding-bottom: 2px;
      border-bottom: 2px solid #49557e;
    }

    li{
      cursor: pointer;
    }

    .navbar-search-icon{
      position: relative;
    }
    .navbar-search-icon .dot{
      position: absolute;
      min-width: 10px;
      min-height: 10px;
      background-color: tomato;
      border-radius: 5px;
      top: -8px;
      right: -8px;
    }

    @media (max-width:1050px){
      .logo{
        width: 140px;
      }

      .navbar-menu{
        gap: 20px;
        font-size: 17px;
      }
      .navbar-right{
        gap: 30px;
      }
      .navbar-right img{
        width: 22px;
      }
      .navbar-right button{
        padding: 8px 25px;
      }
    }
    @media (max-width:900px){
      .logo{
        width: 120px;
      }

      .navbar-menu{
        gap: 15px;
        font-size: 16px;
      }
      .navbar-right{
        gap: 20px;
      }
      .navbar-right img{
        width: 20px;
      }
      .navbar-right button{
        padding: 7px 20px;
        font-size: 15px;
      }
    }
    @media (max-width:750px){
      .navbar-menu{
        display: none;
      }
    }
`;