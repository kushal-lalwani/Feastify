export const RestaurantCard = ({cloudinaryImageId,name,cuisines,areaName}) => {

    return(
      <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{areaName}</h4>
    </div>
)
}