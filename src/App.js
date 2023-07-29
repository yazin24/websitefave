import Navbar from "./components/Navbar";
import Footerbar from "./components/Footerbar";
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   
       <div className="flex flex-col min-h-screen">

        <Navbar/>

        <div className="flex-grow">
      <Router>
        <div className="mt-20">
          <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes> 
          </div>
          </Router>
          </div>
          
          <div className="">
          <Footerbar/>
          </div>
      </div>     
   
  );
}

export default App;