import React, { useState } from 'react'
import '../style/style.css'

const Contact = () => {

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName( e.target.value)}/>
        <input type="email" placeholder='Email' onChange={(e) => setEmail( e.target.value)}/>
      </form>
       <div className='w-full flex justify-center'>
        <button onClick={() => console.log(name,email)} className=' bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600'>Press</button>
        <p>{name}</p>
        <p>{email}</p>
       </div>
    </div>
  )
}

export default Contact