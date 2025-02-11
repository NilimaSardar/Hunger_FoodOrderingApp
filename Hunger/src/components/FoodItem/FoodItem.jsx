import React from 'react'
import styled from 'styled-components'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({id, name, price, description, image}) => {
  return (
    <FoodItemStyled>
        <div className='food-item-img-container'>
            <img src={image} alt="" className="food-item-image" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </FoodItemStyled>
  )
}

export default FoodItem

const FoodItemStyled = styled.div`

`;