import React from 'react'
import Cart from './component/Cart'
import Weather from './component/Weather'
import UserStatus from './component/UserStatus'

const App = () => {
  return (
    <div>
        {/* <Weather/> */}
        <UserStatus LoggedIn={true}  isAdmin={true}/>
    </div>
  )
}


export default App