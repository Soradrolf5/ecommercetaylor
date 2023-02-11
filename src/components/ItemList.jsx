import React from 'react'
import Item from './Item'

const ItemList = ({product}) => {
    return (
        <>
        <div>
            {product?.map((prod)=>(
                <Item key={prod.id }id={prod.id} nombre={prod.nombre} precio={prod.precio}/>
            ))

            }
        </div>
        </>
    )
        
    }


export default ItemList