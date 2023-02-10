import React from 'react'

const ItemList = ({product}) => {
    return(
        {product.map((product)=>{
                return(
                    <div key={product.id}>
                    <h1>{product.nombre}</h1>
                    <h3>{product.precio}</h3>
                    
                    </div>
                )
                })}
            )
    }


export default ItemList