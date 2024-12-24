import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import Contact from './component/Contact'
import Services from './component/Services'
import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/contact.scss'
import './styles/mediaqueries.scss'

function App() {
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
   </Router> 
  )
}

export default App
