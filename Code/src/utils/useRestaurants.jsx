import { useEffect, useState } from "react";


const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]); 

    async function getrestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json()
        const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestaurants(restaurants);
        // setSearchedRestaurants(restaurants);
    
    }
    
    useEffect(()=>{
        getrestaurants();
    },[])

    return restaurants;
}
export default useRestaurants;

  // async function getRestaurants() {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const jsonData = await data.json()
  //   console.log(jsonData)
  //   const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   setRestaurants(restaurants);
  //   setSearchedRestaurants(restaurants);
  // }

  // useEffect(() => {
  //   getRestaurants();
  // }, [])

