import React from 'react'
import {useParams} from 'react-router-dom'
import Data from '../data.json'
import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
const ItemListContainer = () => {
    const {categoryid} = useParams();
    const [product, setProduct] = useState([]);
  
  const getDatos= () => {
    return new Promise((resolve,reject) => {
        if(Data.length ===0){
            reject(new Error("no hay datos para mostrar"))
        }
 
    setTimeout (()=>{
        resolve(Data)
    }, 2000)
   })
  }


    useEffect(() => {
      async function fetchData() {
        const response = await getDatos();
        setProduct(response);
      }
      fetchData();
    }, []);

  const prodFilter = Data.filter((prod)=> prod.category === categoryid)
  return (
    <>
    <div>
    {categoryid ? <ItemList  product={prodFilter}/> : <ItemList product={Data}/>}
    </div>
    </>
  )
}

export default ItemListContainer