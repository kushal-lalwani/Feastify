import { IMAGE_URL } from "../utils/constants"
import { Link } from "react-router-dom"

export const RestaurantCard = ({cloudinaryImageId,name,cuisines,areaName, id}) => {
    
    return(
      <div className="w-52 bg-gray-100 hover:bg-[#f0f0f0] hover:shadow-lg m-4 p-4 rounded-xl">
      <img src={IMAGE_URL+cloudinaryImageId} className="h-48 w-52 rounded-md"/>
      <Link to={"/restaurant/" + id}><h2 className="font-bold text-lg py-1">{name}</h2></Link>
      <h3 className="text-gray-700 py-1">{cuisines.join(', ')}</h3>
      <h4 className="text-gray-600">{areaName}</h4>
    </div>
)
}