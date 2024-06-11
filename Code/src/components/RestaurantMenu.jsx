import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";

const RestaurantMenu = () => {
  const params = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const restaurantMenuData = useRestaurantMenu(params.id);
  if (restaurantMenuData == null) return <Shimmer />;

  const categories =
    restaurantMenuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1 className="font-semibold text-2xl text-center">
        {restaurantMenuData?.cards[0]?.card?.card.text}
      </h1>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? null : index );
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
