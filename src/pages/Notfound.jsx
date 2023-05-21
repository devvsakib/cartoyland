import React from 'react'
import Button from '../components/Common/Button'

const Notfound = () => {
    return (
        <div className='min-h-screen grid place-content-center'>
            <img className='w-1/4 mx-auto' src="/images/notfound.png" alt="Notfound Page" />
            <h1 className='text-3xl font-semibold text-center'>Page Not Found</h1>
            <div className='text-center'>
                <Button text={"Go Back"} path={"/"} />
            </div>
        </div>
    )
}

export default Notfound