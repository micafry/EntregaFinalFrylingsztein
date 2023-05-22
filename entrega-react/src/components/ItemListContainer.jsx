import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{backgroundColor: "black", color:"white", fontSize: "16px"}}>
      {greeting}
    </div>
  )
}

export default ItemListContainer
