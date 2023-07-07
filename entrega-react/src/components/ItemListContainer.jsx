import React from 'react'
import ProductCard from '../components/ProductCard'

const ItemListContainer = ({productsData}) => {
  console.log(productsData)
  return (
    <div>
{
  productsData.map( product => {
    return  (
      <ProductCard key={product.id} productData={product} />
    )
  }
  )
}
    </div>
  )
}

export default ItemListContainer
