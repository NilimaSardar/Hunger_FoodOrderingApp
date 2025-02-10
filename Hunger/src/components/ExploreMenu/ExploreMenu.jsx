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
    </ExploreMenuStyle>
  )
}

export default ExploreMenu


const ExploreMenuStyle = styled.div`

`;