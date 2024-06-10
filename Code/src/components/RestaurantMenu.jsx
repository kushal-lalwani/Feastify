import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurantMenuData = useRestaurantMenu(params.id);
  if (restaurantMenuData == null) return <Shimmer />;

  const categories =
    restaurantMenuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>c?.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="menu">
      <h1 className="font-semibold text-2xl text-center">{restaurantMenuData?.cards[0]?.card?.card.text}</h1>
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}

    </div>
  );
};

export default RestaurantMenu;

/**
Array(5)
0
: 
card
: 
@type
: 
"type.googleapis.com/swiggy.presentation.food.v2.Dish"
analytics
: 
{}
hideRestaurantDetails
: 
true
info
: 
addons
: 
(4) [{…}, {…}, {…}, {…}]
badgesV2
: 
{}
category
: 
"Starters & Soup"
description
: 
"Serves 1 | (Spicy) Cubes Of Paneer, Onion, Capsicum Tossed With Spicy & Savory flavors of Hunan Sauce."
finalPrice
: 
17900
id
: 
"137410096"
imageId
: 
"FOOD_CATALOG/IMAGES/CMS/2024/6/7/a05bf8ea-ee68-4fd8-be01-1ac10f940fa5_c8e1a500-cd36-4f60-a771-1e5cf22e73c4.jpg_compressed"
inStock
: 
1
isVeg
: 
1
itemAttribute
: 
{vegClassifier: 'VEG', portionSize: 'Serves 1'}
itemBadge
: 
{}
itemNudgeType
: 
"FinalPrice"
itemPriceStrikeOff
: 
true
name
: 
"Hunan Paneer Dry"
offerTags
: 
[{…}]
price
: 
36900
ratings
: 
{aggregatedRating: {…}}
ribbon
: 
{}
showImage
: 
true
variants
: 
{}
variantsV2
: 
{} */