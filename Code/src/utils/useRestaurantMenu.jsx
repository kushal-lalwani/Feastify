import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (id) => {
    const [restaurantMenuData, setRestaurantMenuData] = useState();
    async function getMenu(){
        const data = await fetch(MENU_API + id)
        const jsonData = await data.json();
        console.log(jsonData.data);
        setRestaurantMenuData(jsonData.data);
    }

    useEffect(()=>{
        getMenu()
    },[])

    return restaurantMenuData;
}


export default useRestaurantMenu;