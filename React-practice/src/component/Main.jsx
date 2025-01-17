import React from 'react'

const Main = () => {

  const userInfo = [
    {
      username:"Mohan Kumhar",
      email:"mohan@gmail.com",
      job:"SDE"
    },
    {
      username:"Aditya Dubey",
      email:"aditya@gmail.com",
      job:"FrontEnd Developer"
    },
    {
      username:"Vijay Kumar",
      email:"vijay@gmail.com",
      job:"SDE-1"
    }
  ];

  return (
    <div className='w-screen bg-green-400 h-full'>
        <h1 className='text-2xl font-semibold'>Main content</h1>
        {
          userInfo.map(({username,email,job}) => {
            return(
              <ul key={Math.random()}>
               <li>{username}</li>
               <li>{email}</li>
               <li>{job}</li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default Main