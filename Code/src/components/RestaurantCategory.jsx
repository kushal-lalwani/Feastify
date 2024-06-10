import MenuItem from './MenuItem.jsx';
import React from 'react'

const RestaurantCategory = ({data}) => {
    

  return (
  
      <div className="m-3 mx-auto w-8/12 p-4 border-b-2 shadow-md hover:bg-blue-50">
        <div className="flex justify-between">
          <span className="font-semibold">{data?.title}</span>
          <span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </span>
        </div>
        <MenuItem items={data.itemCards} />
      </div>

  );
}

export default RestaurantCategory