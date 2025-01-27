import React from 'react'

const Cart = () => {

  const item = ["Headphone","Phone","Soaf","Laptop","Graphics Card"];
  return (
    <div>
       <h1>Cart</h1>
       {item.length > 0 && <h2>You have {item.length} item in you Cart</h2>} 

       <h4>Product :</h4>
       {item.map(item => (
        <li key={Math.random()}>{item}</li>
       ))}
    </div>
  )
}

export default Cart