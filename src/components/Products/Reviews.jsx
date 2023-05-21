import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import Rating from 'react-rating'

const Reviews = ({ rating }) => {
    return (
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
                <p className='text-lg'>{rating}</p>
                <Rating
                    initialRating={rating}
                    fullSymbol={<FaStar className='text-sm text-accent' />}
                    emptySymbol={<FaRegStar className='text-sm' />}
                    readonly
                />
            </div>
            <p className='ml-1'>Based on {rating} reviews</p>
        </div>
    )
}

export default Reviews