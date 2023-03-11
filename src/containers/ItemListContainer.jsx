import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from '../components/Loading'

const ItemListContainer = () => {

  const { categoryid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
      setLoading(true);

      /* Conection a la base de dato */

      const db = getFirestore();

      const itemsCollection = categoryid ? query(collection(db, "Productos"), where("category", "==", categoryid)) : collection(db, "Productos");
  
      getDocs(itemsCollection)
          .then((snapshot) => {
              setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
          
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
  }, [categoryid]);
  
  return (
      <>
          {/* Logica para utilizar el componente del Loading(snipper) o itemList */}
          {loading ? <Loading /> : <ItemList product={product} />}
      </>
  );
}

export default ItemListContainer;













