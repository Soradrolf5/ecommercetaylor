import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
const ItemListContainer = () => {
    const {categoryid} = useParams();
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
      const taylorProducts = collection(db, "productos");
      getDocs(taylorProducts).then((querySnapshot) => {
        const product = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProduct(product);
      });
    }, []);

const prodFilter = product.filter((prod)=> prod.category === categoryid)
 
  return (
    <>
    <div>
    {categoryid ? <ItemList product={prodFilter}/> : <ItemList product={product}/>}
    </div>
    </>
  )
}

export default ItemListContainer