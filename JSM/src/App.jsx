import './App.css'
import {useState} from 'react'

export function Card({title}){
  
  const [hasLiked,setHasLiked] = useState(false)

  return(
    <div className="">
      <h2 className='bg-gray-700 rounded-lg text-white text-xl m-5 p-3 font-bold border border-white'>
        {title}</h2>
      <button onClick={() => setHasLiked(true)} 
      className='bg-white m-5 px-3 py-2 rounded-md hover:bg-green-500 transition-all duration-200'>
        {}
      </button>      
    </div>
      
  )
}

function App() {


  return (
    <div className='bg-black h-screen'>
        <h1 className='text-white text-xl font-bold'>Functional Component</h1>
         <Card title="Star Wars" rating={5} isCol={true}/>
         <Card title="Iron Man"/>
         <Card title="Avatar"/>
   </div>
  )
}

export default App
