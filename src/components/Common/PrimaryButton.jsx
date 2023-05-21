import React from 'react'

const PrimaryButton = ({ text, icon, fWidth }) => {
    return (
        <button className={`bg-white shadow-xl ${fWidth ? "w-full text-center shadow-none flex justify-center items-center" : "flex justify-center items-center"} hover:shadow-lg hover:bg-accent hover:text-white transition-all duration-200 ease-linear px-5 py-2 rounded text-sm sm:text-xl font-semibold text-accent gap-3`}>{icon}{text}</button>
    )
}

export default PrimaryButton