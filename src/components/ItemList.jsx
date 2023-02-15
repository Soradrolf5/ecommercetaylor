import React from 'react'
import Item from './Item'

const ItemList = ({product}) => {
    return (
        <>
        <div>
            {product?.map((prod)=>(
                <Item key={prod.id }id={prod.id} name={prod.name} price={prod.price} stock={prod.stock} category={prod.category} description={prod.description}/>
            ))

            }
        </div>
        </>
    )
        
    }


export default ItemList