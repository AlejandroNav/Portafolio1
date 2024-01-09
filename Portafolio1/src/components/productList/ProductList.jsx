import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { productos } from '../../data'
const ProductList = () => {
  return (
    <section className='list'>
      <article className='list-texts'>
        <h2 className="list-title">Crear e Inspirar</h2>
        <p className="list-description">¿Buscas elevar tu negocio en el mundo digital? Estás en el lugar correcto. Nos especializamos en el desarrollo web personalizado, desde Landing Pages hasta manejo completo del diseño y presencia digital de marca</p>
      </article>
      <div className="list-listings">
      {productos.map((item) => {
          console.log(item.img);
          return <Product key={item.id} img={item.img} link={item.link} />;
        })}
      </div>
    </section>
  )
}

export default ProductList