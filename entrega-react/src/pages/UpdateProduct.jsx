import React from 'react'
import { Button } from 'react-bootstrap';
import {doc, getDoc, addDoc, collection, getFirestore, updateDoc} from "firebase/firestore";

const UpdateProduct = () => {
  const [category, setCategory] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [price, setPrice] = React.useState();
  const [stock, setStock] = React.useState();
  const [title, setTitle] = React.useState();
  const [productsData, setProductsData] = React.useState();
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();
  const {itemId} = React.useState();

  
  React.useEffect(() => {
    const db = getFirestore();
      const productCollection = doc(db, "products", itemId);
      getDoc(productCollection).then((snapshot) => {
        setProductsData([{ id: snapshot.id, ...snapshot.data() }]);
  
      })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleStockChange = (e) => {
    setStock(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = () =>{
const newProduct = {
  category,
  description,
  image,
  price,
  stock,
  title
}
  
const db = getFirestore();
const updateProductCollection = doc(db, "products", itemId)
updateDoc(updateProductCollection, newProduct).then(res=> console.log(res))

}


  return (
    <div
    style={{ display: "flex", justifyContent:"center", flexDirection:"column", width:"30%", margin:"10px"}}>
      <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Categoría' />
      <input type="text" onChange={(e) => handleDescriptionChange(e)} placeholder='Descripción' />
      <input type="text" onChange={(e) => handleImageChange(e)} placeholder='Imagen' />
      <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Precio' />
      <input type="text" onChange={(e) => handleStockChange(e)} placeholder='Stock' />
      <input type="text" onChange={(e) => handleTitleChange(e)} placeholder='Título' />
      <Button onClick={handleSubmit}>Modificar Producto</Button>
    </div>
  )
}

export default UpdateProduct
