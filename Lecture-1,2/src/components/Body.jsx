
import { RestaurantCard } from "./RestaurantCard.jsx";
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer.jsx'



export const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  function searchRestaurants(searchText, restaurants) {
    const searchedRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    return searchedRestaurants;
  }

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json()
    console.log(jsonData)
    const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRestaurants(restaurants);
    setSearchedRestaurants(restaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, [])


  return (restaurants.length === 0) ? (
    <div className="Restaurants">
      {Array.from({ length: 12 }).map(() => (
        <Shimmer />
      ))}

    </div>) : (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-bar'
          value={searchText}
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={() => {
          const searchedData = searchRestaurants(searchText, restaurants);
          setSearchedRestaurants(searchedData);
        }}>Submit</button>
      </div>
      <div className='Restaurants'>
        {
          searchedRestaurants.map(restraunt => {
            return <RestaurantCard {...restraunt.info} key={restraunt.info.id} />
          })
        }
      </div>

    </>
  )
}