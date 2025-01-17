import React from 'react'

const Product = () => {

    const products = [
        { id:1, name:"Iphone", price:"$600"},
        { id:2, name:"Redmi Note 12", price:"$200"},
        { id:1, name:"Google Pixel", price:"$300"},
    ];

  return (
    <div>
        {products.map((p) => (
            <div key={p.id}>
                <h1>Name :{p.name}</h1>
                <h1>Price :{p.price}</h1>
            </div>
        ))}
    </div>
  )
}

export default Product