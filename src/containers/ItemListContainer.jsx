import React from 'react'
import data from './data.json'
import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
const ItemListContainer = ({greeting, product}) => {
    const [product, setProduct] = useState([]);
  
  const getDatos=()=>{
    return new promise ((resolve,reject)=>{
        if(data.length ===0){
            reject(new Error("no hay datos para mostrar"))
        }
 
    setTimeout (()=>{
        resolve (data)
    },2000)
   })
    }


    useEffect(() => {
      async function fetchData() {
        const response = await getDatos;
        const data = await response.json();
        setProduct(data);
      }
      fetchData();
    }, []);

  return (
    <>
    <div>
    <ItemList product={product}/>
    </div>
      <h1>{greeting}</h1>
    </>
  )
}

export default ItemListContainer