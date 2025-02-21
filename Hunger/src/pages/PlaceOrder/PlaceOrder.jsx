import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <PlaceOrderStyle>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
      </div>
    </PlaceOrderStyle>
  )
}

export default PlaceOrder

const PlaceOrderStyle = styled.form`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  margin-top: 100px;

  .place-order-left{
    width: 100%;
    max-width: max(30%, 500px);
  }

  .place-order-left .title{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
  }

  .place-order-left input{
    margin-bottom: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
  }

  .place-order-left .multi-fields{
    display: flex;
    gap: 10px;
  }

  .place-order-right{
    width: 100%;
    max-width: max(40%,500px);
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
    margin-top: 30px;
    border: none;
    color: white;
    background-color: tomato;
    width: max(15vw, 200px);
    padding: 12px 0px;
    border-radius: 4px;
    cursor: pointer;
  }

`;