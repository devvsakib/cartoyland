import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [coupon, setCoupon] = useState('CT50')
  const [couponCopied, setCouponCopied] = useState(false)
  const couponCopy = () => {
    if (!couponCopied) {
      toast.success('Coupon Copied')
      setCouponCopied(true)
    } else {
      toast.error("Coupon Already Copied")
    }

  }

  return (
    <div className="bg-gradient-to-br  lg:min-h-[80vh] from-[#FFD738]/40 to-accent ">
      <div className='bg-gradient-to-t py-5 lg:h-[80vh] from-white via-white/0'>
        {/* <div className="py-10 pt-28 banner__gradient min-h-screen"> */}
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col items-center font-barlow lg:items-start mt-20 lg:mt-0">
              <h1 className="text-6xl lg:text-8xl font-semibold  lg:mb-5">CarToyLand</h1>
              <p className=" text-2xl">Unleash the Joy of Toy Cars!</p>
              <div className='grid gap-5  mt-8'>
                <PrimaryButton text='Shop' path='/alltoys' />
                {/* <button className="bg-white px-5 py-2 rounded text-xl font-semibold text-accent">Register</button> */}
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end gap-5">
              <img data-aos="fade-left" className='min-w-full lg:w-4/5' src="/images/banner_image.svg" />
              <div className='absolute border border-white/30 bg-white/30 p-5 bottom-[25%] left-0 lg:left-auto lg:right-0 lg:top-auto px-5 lg:px-10 text-white rounded-2xl backdrop-blur-sm'>
                <div className='text-lg lg:text-2xl'>
                  Discount <br /> <span className="text-5xl lg:text-6xl font-semibold text-white">50%</span>
                </div>

                <div className='flex items-center lg:gap-5 mt-2 lg:mt-5'>
                  <p className={`${couponCopied ? "bg-gray-400" : "bg-accent"} text-white text-sm lg:text-xl font-semibold px-2 lg:px-5 lg:py-2 rounded-full cursor-pointer select-none`}>
                    Code: <span className="text-lg lg:text-2xl font-semibold" onClick={couponCopy}>{couponCopied ? "COPIED" : coupon}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner