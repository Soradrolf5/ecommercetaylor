import React from 'react'

const ItemList = ({product}) => {
    return (
        <>
            {product?.map((prod)=>(
                <div key={prod.id}>
                <h1>{prod.nombre}</h1>
                <h3>{prod.precio}</h3>
                </div>
            ))

            }
        </>
    )
        
    }


export default ItemList