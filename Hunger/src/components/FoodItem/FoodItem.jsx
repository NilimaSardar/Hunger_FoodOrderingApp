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
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #00000015;
  transition: 0.3s;
  animation: fadeIn 1s;

  .food-item-image{
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }

  .food-item-info{
    padding: 20px;
  }

  .food-item-name-rating{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .food-item-name-rating p{
    font-size: 20px;
    font-weight: 500;
  }

  .food-item-name-rating img{
    width: 70px;
  }

  .food-item-desc{
    color: #676767;
    font-size: 12px;
  }

  .food-item-price{
    color: tomato;
    font-size: 22px;
    font-weight: 500;
    margin: 10px 0px;
  }
`;