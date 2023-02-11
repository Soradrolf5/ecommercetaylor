import ItemDetail from '../components/ItemDetail'
import Data from '../data.json'
import React from 'react'

const ItemDetailContainer = () => {
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
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer