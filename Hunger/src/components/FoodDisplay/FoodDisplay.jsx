import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)

  return (
    <FoodDisplayStyled id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            })}
        </div>
    </FoodDisplayStyled>
  )
}

export default FoodDisplay

const FoodDisplayStyled = styled.div`

`;