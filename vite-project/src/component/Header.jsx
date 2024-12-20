import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {


  return (
    <div>
      <nav className='flex justify-between shadow-lg px-5 py-5'>
        <img src="" alt="logo" />
        <div className='space-x-6 flex'>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Home">Home</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/About">About</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Contact">Contact</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Gallery">Gallery</Link>
        </div>
        <div className='space-x-5'>
          <button className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'>
            Login
          </button>
          <button className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'>
            SignUp
          </button>
        </div>
      </nav>
    </div>
  )
}


export default Header