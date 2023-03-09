import ItemDetail from '../components/ItemDetail'
import React from 'react'
import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const taylorProducts = collection(db, "productos");
    getDocs(taylorProducts).then((querySnapshot) => {
      const product = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(product);
    });
  }, []);

  return (
    <>
    {product &&  <ItemDetail product={data} />}
    </>
    
  )
}

export default ItemDetailContainer