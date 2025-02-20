import React, { useState } from 'react'
import styled from 'styled-components'

const LoginPopup = () => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <LoginPopupStyle>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
            </div>
        </form>
    </LoginPopupStyle>
  )
}

export default LoginPopup

const LoginPopupStyle = styled.div`

`;