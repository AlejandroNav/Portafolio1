import React from 'react'
import './product.css'

const Product = ({ img, link, key }) => {
  return (
    <section className='product'>
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a target="_blank" href={link}>
        <img src={img} alt={key} className='product-image' />
      </a>
    </section>
  )
}

export default Product