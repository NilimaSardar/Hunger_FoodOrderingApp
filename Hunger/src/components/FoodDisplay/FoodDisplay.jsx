import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <FoodDisplayStyled id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
              }
            })}
        </div>
    </FoodDisplayStyled>
  )
}

export default FoodDisplay

const FoodDisplayStyled = styled.div`
  margin-top: 30px;

  h2{
    font-size: max(2vw, 24px);
    font-weight: 600;
  }

  .food-display-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
    margin-top: 30px;
    gap: 30px;
    row-gap: 50px;
  }
`;