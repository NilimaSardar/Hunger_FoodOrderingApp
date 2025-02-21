import React, { useState } from 'react'
import styled from 'styled-components'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <LoginPopupStyle>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==='Sign Up'?'Create account':'Login'}</button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p> 
            }
        </form>
    </LoginPopupStyle>
  )
}

export default LoginPopup

const LoginPopupStyle = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  display: grid;

  .login-popup-container{
    place-self: center;
    width: max(23vw, 330px);
    color: #808080;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px 30px;
    border-radius: 8px;
    font-size: 14px;
    animation: fadeIn 0.5s;
  }

  .login-popup-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }

  .login-popup-title img{
    width: 16px;
    cursor: pointer;
  }

  .login-popup-inputs{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .login-popup-inputs input{
    outline: none;
    border: 1px solid #c9c9c9;
    padding: 10px;
    border-radius: 4px;
  }

  .login-popup-container button{
    border: none;
    padding: 10px;
    border-radius: 4px;
    color: white;
    background-color: tomato;
    font-size: 15px;
    cursor: pointer;
  }

  .login-popup-condition{
    display: flex;
    align-items: start;
    gap: 8px;
    margin-top: -15px;
  }

  .login-popup-condition input{
    margin-top: 5px;
  }

   p span{
    color: tomato;
    font-weight: 500;
    cursor: pointer;
  }
`;