import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';




const CartWidget = () => {
  const {count} = useContext(CartContext)
  return (
    <div style={{
      display: "flex",
      width: "35px",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",    
    }}>
      <Link to="/Cart"> 
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} />
      <span style={{color:"white",textDecoration:"none"}}> {count.qtyItems} </span>
      </Link>
    </div>
  )
}

export default CartWidget
