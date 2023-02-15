import ItemDetail from '../components/ItemDetail'
import Data from '../data.json'
import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  
    const getDatos= () => {
        return new Promise((resolve,reject) => {
            if(Data.length ===0){
                reject(new Error("no hay datos para mostrar"))
            }
     
        setTimeout (()=>{
          const filter = Data.filter((prod) => prod.id === id)
            resolve(filter)
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
  return (
    <ItemDetail product={Data}/>
  )
}

export default ItemDetailContainer