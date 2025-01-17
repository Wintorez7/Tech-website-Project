import React from 'react'

const Userlist = () => {

    const users = [
        { id:1 ,name:"Alice",age:25},
        { id:2 ,name:"Roan",age:22},
        { id:3 ,name:"Harry",age:23},
    ]

  return (
    <div className='bg-blue-400'>
        {users.map((user) => (
            <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age :{user.age}</h1>
           </div>
        ))}
    </div>
  );
}

export default Userlist