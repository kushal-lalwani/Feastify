import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
//   const [restaurantMenuData, setRestaurantMenuData] = useState();
//   const [restaurantMenu, setRestaurantMenu] = useState();
  const params = useParams();


// useEffect(() => {
//   getRestaurantMenuData();
// }, []);



// async function getRestaurantMenuData() {
//   const data = await fetch(MENU_API + params.id);
//   const json = await data.json();
//   console.log();
//   setRestaurantMenuData(json.data);
//   setRestaurantMenu(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards )
//   console.log(restaurantMenu);
//   }
    
const restaurantMenuData = useRestaurantMenu(params.id)
console.log(restaurantMenuData);

    // if (itemCards) return <Shimmer />
    if (restaurantMenuData == null) return <Shimmer />;
  return (
    <div className="menu">
      <div>
      <h1>Restaurant id : {params.id}</h1>
      {/* <h1>Restaurant Name : {restaurantMenu.name}</h1>  */}
      <img
        src={
          IMAGE_URL + restaurantMenuData?.cards[2].card.card.info.cloudinaryImageId
        }
        alt=""
      />
      </div>
      
      <div >
        <h1>Menu</h1>
        {restaurantMenuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item,index) => (
          <h2 key={index}>{item?.card?.info?.name}</h2>
        ))}
      </div>
    </div>
  );
};


export default RestaurantMenu;
