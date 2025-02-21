import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import styled from 'styled-components'

const Cart = () => {

  const {cartItems, food_list, removeFromCart} = useContext(StoreContext);

  return (
    <CartStyled>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
                  <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
    </CartStyled>
  )
}

export default Cart

const CartStyled = styled.div`
  margin-top: 100px;

  .cart-items-title{
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    color: grey;
    font-size: max(1vw,12px);
  }

  .cart-items-item{
    margin: 10px 0px;
    color: black;
  }

  .cart-items-item img{
    width: 50px;
  }
  hr{
    height: 1px;
    background-color: #e2e2e2;
    border: none;
  }

  .cart-items-item .cross{
    cursor: pointer;
  }
`;