import restaurantData from "../utils/Data";
import {RestaurantCard} from "./RestaurantCard";
import React, { useState } from 'react';


function searchRestaurants(searchText,restaurantData){
    const searchedData = restaurantData.filter((restraunt) => restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()))
    return searchedData;
  } 
  

export const Body = () =>{
    const [searchText,setSearchText] = useState();
    const [restaurants,setRestaurants] = useState(restaurantData);
    console.log(restaurants)
  
   
    return(
      <>
      <div className='search-container'>
          <input
            type='text'
            className='search-bar'
            value={searchText}
            placeholder='Search'
            onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => {
              const searchedData = searchRestaurants(searchText,restaurantData);
              setRestaurants(searchedData);
              }}>Submit</button>
        </div>
        <div className='Restraunts'>
        {
          restaurants.map(restraunt => {
            return <RestaurantCard {...restraunt.info} key={restraunt.info.id}/>
          })
        }
      </div>
  
    </>
      )
    }