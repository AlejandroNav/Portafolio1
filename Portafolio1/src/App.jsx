import { useContext, useState } from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Product from './components/product/Product'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toogle from './components/toggle/Toggle'
import {ThemeContext} from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode?'white': '#2a2e3a', color: darkMode?'#2a2e3a':"#ff7129" }}>
      <Toogle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App
