import React from 'react'

const Feature = () => {
    return (
        <div className='mt-20 mb-32 grid gap-10 grid-cols-1 md:grid-cols-3'>
            <div data-aos="flip-left"
                data-aos-delay="100"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='flex flex-col items-center shadow-[0px_00px_5px] shadow-black/20 card__gradient border border-black/30 text-white justify-center py-8 gap-5 rounded-md'>
                <img src='/images/service.png' alt='delivery' />
                <h2 className='text-2xl font-semibold'>Fast Delivery</h2>
            </div>
            <div data-aos="flip-left"
                data-aos-delay="200"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500" className='flex flex-col items-center shadow-[0px_00px_5px] shadow-black/20 card__gradient border border-black/30 text-white justify-center py-8 gap-5 rounded-md'>
                <img src='/images/service-02.png' alt='gift' />
                <h2 className='text-2xl font-semibold'>Buy or Gift</h2>
            </div>
            <div data-aos="flip-left"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500" className='flex flex-col items-center shadow-[0px_00px_5px] shadow-black/20 card__gradient border border-black/30 text-white justify-center py-8 gap-5 rounded-md'>
                <img src='/images/service-04.png' alt='gift' />
                <h2 className='text-2xl font-semibold'>Always Discount</h2>
            </div>
        </div>
    )
}

export default Feature