import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

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
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
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

  .cart-bottom{
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    gap: max(12vw, 20px);
  }

  .cart-total{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cart-total-details{
    display: flex;
    justify-content: space-between;
    color: #555;
  }
  
  .cart-total hr{
    margin: 10px 0px;
  }

  .cart-total button{
    border: none;
    color: white;
    background-color: tomato;
    width: max(15vw, 200px);
    padding: 12px 0px;
    border-radius: 4px;
    cursor: pointer;
  }

  .cart-promocode{
    flex: 1;
  }

  .cart-promocode p{
    color: #555;
  }

  .cart-promocode-input{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eaeaea;
    border-radius: 4px;
  }

  .cart-promocode-input input{
    background: transparent;
    border: none;
    outline: none;
    padding-left: 10px;
  }

  .cart-promocode-input button{
    width: max(10vw,150px);
    padding: 12px 5px;
    background-color: black;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width:750px){
    .cart-bottom{
      flex-direction: column-reverse;
    }
    .cart-promocode{
      justify-content: start;
    }
  }
`;