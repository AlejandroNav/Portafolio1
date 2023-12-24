import React from 'react'
import './productList.css'
import Product from '../product/Product'
const ProductList = () => {
  return (
    <section className='list'>
      <article  className='list-texts'>
        <h2 className="list-title">Crear e Inspirar</h2>
        <p className="list-description">Portafolio creativo</p>
      </article>
      <Product/><Product/><Product/>
    </section>
  )
}

export default ProductList