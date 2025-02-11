import React, { useContext } from 'react'
import styled from 'styled-components'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <FoodItemStyled>
        <div className='food-item-img-container'>
            <img src={image} alt="" className="food-item-image" />
            {
              !cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
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

  .food-item-img-container{
    position: relative;
  }

  .food-item-img-container .add{
    width: 35px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
  }
  .food-item-counter{
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 50px;
    background-color: white;
  }

  .food-item-counter img{
    width: 30px;
  }
`;