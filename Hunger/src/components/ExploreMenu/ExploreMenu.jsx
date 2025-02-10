import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import styled from 'styled-components'

const ExploreMenu = () => {
  return (
    <ExploreMenuStyle id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable
        array of dishes. Our mission is to satisfy your
        cravings and elevate your dining experience, one 
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </ExploreMenuStyle>
  )
}

export default ExploreMenu


const ExploreMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1{
    color: #262626;
    font-weight: 500;
  }

  .explore-menu-text{
    max-width: 60%;
    color: #808080;
  }

  .explore-menu-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    text-align: center;
    margin: 20px 0px;
    overflow-x: scroll;
  }

  .explore-menu-list::-webkit-scrollbar{
    display: none;
  }

  .explore-menu-list-item img{
    width: 7.5vw;
    min-width: 80px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0ms.2s;
  }

  .explore-menu-list-item p{
    margin-top: 10px;
    color: #747474;
    font-size: max(1.4vw,16px);
    cursor: pointer;
  }

  hr{
    margin: 10px 0px;
    height: 2px;
    background-color: #e2e2e2;
    border: none;
  }
`;