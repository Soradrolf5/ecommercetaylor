import React from 'react'

const ItemList = ({product}) => {
    return (
        <>
        <div>
            {product?.map((prod)=>(
                <h1>{prod.nombre}</h1>
            ))

            }
        </div>
        </>
    )
        
    }


export default ItemList