import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Collection from "./components/Collection"
import ProductDetails from "./components/ProductDetails"


const App = ()=>{
  const Title ="MAISON cafe"
  const Hometitle ="A LITTLE MORE YOU"
  return(
    <div>
      <Navbar mytitle={Title}/>

      <Routes>
          <Route path="/" element={<Home title={Hometitle}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/coll" element={<Collection/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}


export default App

//  <Navbar mytitle={Title}/>
//       <Home  title={Hometitle}/>
//       <Footer/>