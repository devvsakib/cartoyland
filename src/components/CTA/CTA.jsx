import { useState } from 'react'
import PrimaryButton from '../Common/PrimaryButton'
import toast from 'react-hot-toast'

const CTA = () => {
  const [email, setEmail] = useState('')
  const emailRegex = /^\S+@\S+\.\S+$/;
  const subscribe = (e) => {
    e.preventDefault()

    if (!email) {
      return toast.error('Please enter your email')
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email");
      return;
    }
    toast.success('You have successfully subscribed to our newsletter')
    setEmail('')
    return

  }
  return (
    <div className='my-32'>
      <div className='py-12 banner__gradient rounded-xl shadow-2xl text-white'>
        <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex flex-col items-center md:items-start'>
              <h2 className='text-4xl font-semibold font-barlow mb-2'>Subscribe to our <span className='text-accent uppercase font-bold'>newsletter</span></h2>
              <p className='text-lg mb-2'>Get notification about new products and discount</p>
              <div className='flex gap-2'>
                <div className='flex items-center bg-white rounded-lg pr-2 gap-2'>
                  <input
                    className='outline-none border-2 text-lg md:text-xl lg:text-3xl border-white text-black rounded-md px-4 py-2 w-full md:w-auto'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                  />
                  <button onClick={subscribe}>
                    <PrimaryButton text='Subscribe' />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center md:justify-end mt-5 md:mt-0'>
              <img className='w-full md:w-auto' src="/images/subscribe.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA