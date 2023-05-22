import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon="fa-light fa-cart-shopping" style={{color: "#ffffff",}} />
      <span>0</span>
    </div>
  )
}

export default CartWidget
