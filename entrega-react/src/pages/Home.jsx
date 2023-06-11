import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {ProductsData} from '../json/Products'


const Home = () => {
  return (
  
      <ItemListContainer productsData={ProductsData} />

  )
}

export default Home
