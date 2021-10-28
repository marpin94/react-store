import React, { useState, useEffect } from 'react'
import styles from './CartItem.module.css'


export const CartItem = ({itemName, removeItem, itemId, itemPrice, Qty, changeQty, imageId}) => {
    
    const handleDelete = () => removeItem(itemId)
    const decrement = () => changeQty(itemId, -1)
    const increment = () => changeQty(itemId, 1)

    return (
        <div className='card text-center'>
            <img className={styles.itemImg}  src={`https://source.unsplash.com/${imageId}/400x500`} alt="Card image cap"></img>
            <h3>{itemName}</h3>
            <br/>
            <p>${itemPrice}</p>
            <br/>
            <div>
                <button onClick={decrement} className='btn btn-dark'> - </button>
                Qty: {Qty}
                <button onClick={increment} className='btn btn-dark'> + </button>
            </div>
            <div>

            </div>
            <div className='btn'>
            <button onClick={handleDelete} className='btn btn-dark'>Remove Item</button>
            </div>

        </div>
    )
}
