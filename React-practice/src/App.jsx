import React from 'react'

const App = () => {
  return (
    <div>

      <User
      name="Mohan Kumhar" 
      age={24}
      img="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" 
      Job="frontend Developer"/>
  
    </div>
  )
}

const User = (props) => {
  return(
    <div>
      <section>
        <img src={props.img} width={200} alt="profile" />
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>job: {props.Job}</h1>
      </section>
    </div>
  )
}

export default App