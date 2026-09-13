import './Style/App.css';
import Home from './Pages/Home';
// import About from './Pages/About'
// import Gallery from './Pages/Gallery'
import {  Route, Routes } from 'react-router-dom';
// import Navbar from './LayOut/Navbar';
// import Footer from './LayOut/Footer';
import  layout from './LayOut/layout'


function App() {
  

  return (
    <>
      
      <Routes>
        <Route element={layout}>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
