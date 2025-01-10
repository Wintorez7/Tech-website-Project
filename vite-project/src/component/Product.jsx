import React from 'react'


const Coin = ({name , symbol , imgSrc , price}) => {

  return (
    <div >
      <div className='p-[2rem] flex flex-col   items-center m-5 bg-slate-200 rounded-md w-[200px] h-[200px] '>
        <img src={imgSrc} alt="img" className='w-[60px]'/>
        <h1 className='text-2xl font-semibold'>{symbol}</h1>
        <p>{name}</p>
        <h4>₹ {price}</h4>
      </div>
    </div>
  )
}

export default Coin