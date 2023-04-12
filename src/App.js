import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import About from './component/Pages/About'
import Login from './component/Pages/AuthPages/Login'
import Cart from './component/Pages/Cart'
import Home from './component/Pages/Home'
import PageNotFound from './component/Pages/PageNotFound'
import Product from './products/Product'
import ProductContext from './Api/ProductContext'
import Store from './Redux/Store/Store'
import  {Provider} from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import CarouselComp from './component/Carousel/CarouselComp'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Provider store={Store}>
      <ProductContext>
      <Navbar></Navbar>
      <Home></Home>
      <CarouselComp></CarouselComp>
      <ToastContainer position='top-right'/>
      <Routes>
        <Route path='/product/:name' element={<Product/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route  path='/Login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer></Footer>
      </ProductContext>
      </Provider>
      </BrowserRouter>
     
    </div>
  )
}

export default App
