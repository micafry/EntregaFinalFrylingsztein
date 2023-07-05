import React, {useContext} from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {ProductsData} from '../json/Products'
import { CartContext } from '../context/CartContext'


const Home = () => {
  const state = useContext(CartContext)
  console.log(state)
  return (
  
      <ItemListContainer productsData={ProductsData} />

  )
}

export default Home
