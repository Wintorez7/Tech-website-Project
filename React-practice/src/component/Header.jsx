import React from 'react'

const Header = () => {
  return (
    <div className='w-screen h-[80px] flex flex-col bg-gray-300'>
        {/* <h1 className='px-2 py-1 lg:text-2xl md:text-xl mx-auto '>Welcome to my Website</h1> */}
        <nav className='w-screen h-full bg-gray-400 flex items-center justify-between px-5 py-3 space-x-5'>
            <img src="" alt="Logo" className='' />
            <div className='flex space-x-5 text-xl'>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
            </div>
            <div className='space-x-3'>
                <button className='bg-blue-500 px-2 py-1 rounded-lg text-white'>Login</button>
                <button className='bg-blue-500 px-2 py-1 rounded-lg text-white'>Sign-up</button>
            </div>
        </nav>
    </div>
  )
}

export default Header