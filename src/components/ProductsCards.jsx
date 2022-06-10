import React from 'react'
import "../styles/components/productsCard.scss"

function ProductsCards(props) {
  return (
    <>
    <div className='card-container'>
        <div className='card-img-container'>
            <img src={props.img} alt="" />
        </div>
        <div className='card-products-info'>
        <p className='card-products-title'>{props.title}</p>
        <p className='card-products-price'>{props.price}</p>
        </div>
    </div>
    </>
  )
}

export default ProductsCards;