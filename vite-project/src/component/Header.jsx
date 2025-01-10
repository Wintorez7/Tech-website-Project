import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {


  return (
    <div>
      <nav className='flex w-full justify-between items-center shadow-lg px-5 py-3'>
        {/* logo */}
        <img src="" alt="logo" />
        <div className='space-x-6 hidden sm:flex'>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Home">Home</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/About">About</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Contact">Contact</Link>
            <Link className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md' 
            to="/Gallery">Gallery</Link>
        </div>
        <div className='space-x-5 hidden sm:flex'>
          <button className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'>
            Login
          </button>
          <button className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'>
            SignUp
          </button>
        </div>
        {/* Mobile menu button */}
        <div className='sm:hidden flex items-center'>
          <button className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
            aria-label="Open Menu">
            ☰
          </button>
        </div>
      </nav>
    </div>
  )
}


export default Header


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div>
//       <nav className='flex w-full justify-between items-center shadow-lg px-5 py-3'>
//         {/* Logo */}
//         <img src="/path-to-your-logo.png" alt="logo" className='h-10' />

//         {/* Navigation Links */}
//         <div className='hidden sm:flex space-x-6'>
//           <Link
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             to="/Home"
//           >
//             Home
//           </Link>
//           <Link
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             to="/About"
//           >
//             About
//           </Link>
//           <Link
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             to="/Contact"
//           >
//             Contact
//           </Link>
//           <Link
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             to="/Gallery"
//           >
//             Gallery
//           </Link>
//         </div>

//         {/* Buttons */}
//         <div className='hidden sm:flex space-x-5'>
//           <button
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             aria-label="Login"
//           >
//             Login
//           </button>
//           <button
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             aria-label="Sign Up"
//           >
//             SignUp
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className='sm:hidden flex items-center'>
//           <button
//             className='shadow-xl px-4 py-2 hover:bg-slate-100 transition-all duration-150 rounded-md'
//             aria-label="Open Menu"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
