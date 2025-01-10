import React from 'react'
import "../style/spinner.css"

const Loader = () => {
  return (
    <div className='flex items-center justify-center absolute w-full h-[600px] '>
        <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Loader