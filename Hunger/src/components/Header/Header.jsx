import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyled>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>
                Choose from a diverse menu featuring a delectable
                array of dishes crafted with the finest ingredients and culinary expertise.
                Our mission is to satisfy your cravings and elevate your dining experience,
                one delicious meal at a time.
            </p>
            <button>View Menu</button>
        </div>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
    height: 34vw;
    margin: 30px auto;
    background: url('/header_img.png') no-repeat;
    background-size: contain;
    position: relative;

    .header-contents{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1.5vw;
        max-width: 50%;
        bottom: 10%;
        left: 6vw;
        animation: fadeIn 3s;
    }

    .header-contents h2{
        font-weight: 500;
        color: white;
        font-size: max(4.5vw,22px);
    }

    .header-contents p{
        color: white;
        font-size:1vw;
    }

    .header-contents button{
        border: none;
        color: #747474;
        font-weight: 500;
        padding: 1vw 2.3vw;
        background-color: white;
        font-size: max(1vw, 13px);
        border-radius: 50px;
    }

    @media (max-width: 1050px){
        .header-contents{
            max-width: 45%;
        }
    }
    @media (max-width: 750px){
        .header-contents{
            max-width: 65%;
        }
        .header-contents p{
            display: none;
        }
        .header-contents button{
            padding: 2vw 4vw;
        }
    }
`;