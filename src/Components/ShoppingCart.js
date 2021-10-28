import React, {useEffect} from 'react'
import {CartItem} from './CartItem'
import styles from './ShoppingCart.module.css'

export const ShoppingCart = ({cart, removeItem, changeQty}) => {



    const price = cart.map(item => item.price)
    const itemTotal = cart.map(item => item.Qty * item.price)
    const total = itemTotal.reduce((acc,item) => (acc+=item),0)

    const cartItems = cart.map((item) => 
    <CartItem key={item.id} 
    removeItem={removeItem} 
    itemId={item.id}
    itemName={item.item}
    imageId={item.imageId}
    itemPrice ={item.price}
    Qty = {item.Qty}
    changeQty={changeQty}/> )

    return (
        <>
        <div className={styles.main} > 
            {cartItems}
        </div>
        <nav className='navbar fixed-bottom'>
            <h2 className={styles.text}>Total: ${total}</h2>
        </nav>
        </>
    )
}
