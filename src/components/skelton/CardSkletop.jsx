import React from 'react'

const CardSkelton = () => {
  return (
     <div className="animate-pulse">
          <div className="cursor-pointer hover:shadow-lg sm:p-5 md:p-0">
            <figure>
              {/* Skeleton for image */}
              <div className="h-62 sm:h-32 w-full rounded-md bg-gray-300"></div>
              {/* Skeleton for text */}
              <div className="mt-3 mb-5">
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
              </div>
            </figure>
          </div>
        </div>
  )
}

export default CardSkelton
