import React from 'react'
import ProductCard from '../components/ProductCard'



 const ItemDetailContainer = ({ productsData }) => {
   return (
     <div style={{
       width: "100%",
       height: "100%",
       display: "flex",
       justifyContent: "space-evenly",
     }}>
       {
         productsData.map(product => {
           return (
             <ProductCard key={product.id} productData={product} />
           );
         })}
       <div style={{
         width: "60%",
         height: "100%",
         display: "flex",
         flexDirection: "column",
         justifyContent: "start",
         alignItems: "start",
         textAlign: "left"
       }}>
         <h2>Descripción</h2>
        <p>
                  
           {/* tengo que ver cómo hacer para poner la descripción de cada producto acá */}
                     </p>
      </div>
    </div>
   )
 }

export default ItemDetailContainer
