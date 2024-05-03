import { IMAGE_URL } from "../utils/constants"
import { Link } from "react-router-dom"

export const RestaurantCard = ({cloudinaryImageId,name,cuisines,areaName, id}) => {

    return(
      <div className="card">
      <img src={IMAGE_URL+cloudinaryImageId}/>
      <Link to={"/restaurant/" + id}><h2>{name}</h2></Link>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{areaName}</h4>
    </div>
)
}