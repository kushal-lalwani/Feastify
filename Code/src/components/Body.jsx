import { RestaurantCard } from "./RestaurantCard.jsx";
import React, { useState } from 'react';
import Shimmer from './Shimmer.jsx';
import useRestaurants from "../utils/useRestaurants.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

export const Body = () => {
    const [searchText, setSearchText] = useState('');
    const restaurants = useRestaurants();
    const [searchedRestaurants, setSearchedRestaurants] = useState(restaurants);
    
    if (restaurants !== searchedRestaurants && searchText.trim() === '') {
      setSearchedRestaurants(restaurants);
    }
    
    const searchRestaurants = (searchText) => {
      const searchedData = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedRestaurants(searchedData);
  };
  
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks Like You are Offline...</h1>
    return restaurants.length === 0 ? (
      <div className="Restaurants flex flex-wrap mt-16">
            {Array.from({ length: 20 }).map((index) => (
              <Shimmer key={index}/>
            ))}
        </div>
    ) : (
      <>
            <div className='search-container'>
                <input
                    type='text'
                    className='search-bar m-4 py-1 px-4 border border-solid rounded-lg border-black'
                    value={searchText}
                    placeholder='Search'
                    onChange={e => setSearchText(e.target.value)}
                    />
                <button onClick={() => searchRestaurants(searchText)} className="px-2 py-1 bg-green-200 rounded-lg">Submit</button>
            </div>
            <div className='Restaurants flex flex-wrap'>
                {searchedRestaurants.map(restaurant => (
                  <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                ))}
            </div>
        </>
    );
};
