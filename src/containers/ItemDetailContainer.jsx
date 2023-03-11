import ItemDetail from '../components/ItemDetail'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = doc(db, "Productos", id);
    getDoc(itemsCollection)
    .then((snapshot) =>{
      setProduct({id: snapshot.id, ...snapshot.data() })
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {/* Logica para utilizar el componente del Loading(snipper) o itemDetail */}
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};




export default ItemDetailContainer



