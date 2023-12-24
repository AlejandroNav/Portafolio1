import { useState } from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Product from './components/product/Product'
import ProductList from './components/productList/ProductList'
function App() {

  return (
    <>
      <Intro/>
      <About/>
      <ProductList/>
    </>
  )
}

export default App
