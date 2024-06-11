import React from 'react'
import { MENU_IMAGE } from '../utils/constants';

const MenuItem = ({items}) => {
  

  return (
    <div>
      {items.map((item) => (
        <div className="m-3 p-4 shadow-md bg-gray-50 flex justify-between " key={item.card.info.id}>
            
          <div className='w-9/12'>
            <span className="text-lg font-semibold font-mono text-gray-700">
              {item?.card?.info?.name} -{" "}
            </span>
            <span className="text-md font-semibold">
              {item?.card?.info?.price
                ? "₹" + item?.card?.info?.price / 100
                : "₹" + item?.card?.info?.defaultPrice / 100}
            </span>
          <p>{item?.card?.info?.description}</p>
          <button className='text-green-500 border-2 p-2 font-bold rounded-lg mt-6'>ADD</button>
          </div>
          

          <div className="h-40 w-3/12">
          {item?.card?.info?.showImage 
          ? (<img
              className="h-full w-full"
              src={MENU_IMAGE + item?.card?.info.imageId}
              alt=""
            />) : (<div></div>)
          }
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItem