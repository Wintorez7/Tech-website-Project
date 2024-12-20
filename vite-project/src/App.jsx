import './App.css'
import Header from './component/Header'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Gallery from './component/Gallery'


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='*' element={<div>Page Not Found</div>}/>
    </Routes>
   </Router>
   
  )
}

export default App
