import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
//import { ProductsData } from '../json/Products'
//import axios from 'axios';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoaderComponent from '../components/LoaderComponent';



const homeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState("");

  useEffect(() => {

    const db = getFirestore();
    const productCollection = collection(db, "products");
    getDocs(productCollection).then((snapshot) => {
      setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );

    })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, []);

  return (
    <div style={homeStyles}>
      {loading ? (<LoaderComponent />) : (<ItemListContainer productsData={productsData} />)}
    </div>
  )
}

export default Home

// PARA HACER ESTILOS podemos poner x ej en el div del loadercomponent div style=(homeStyles) y arriba declarar const homeStyles y ahí hacer el css {width: "100vw", height: "100%", etc}
//CTRL + KC para comentar