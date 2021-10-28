import React, { useEffect, useState } from 'react'
import {items} from '../Data/items'
import {Link} from 'react-router-dom'
import styles from './ItemDetail.module.css'


export const ItemDetail = ({match,addItem, changeQty}) => {

    const [load, setLoad] = useState(false)

    const decrement = () => changeQty(pageItem.id, -1)
    const increment = () => changeQty(pageItem.id, 1)
    
    let pageItem = items.find(function(item){
        return (
             item.id == match.params.id
        )
    })

    const handleClick = () => {
        addItem(pageItem)
        pageItem = {...pageItem, Qty: pageItem.Qty+1}
        setLoad(true)

    }

    return (
        <div className={styles.main}>
            <img className ={styles.itemImg}src={`https://source.unsplash.com/${pageItem.imageId}/100X150`} alt="Card image cap"></img>
           <div className='card' key={pageItem.id}>
               <h1 className='card-title'>{pageItem.item}</h1>
               <h3 className='card-title'>${pageItem.price}</h3>
               
               {load &&
                <>

                <div>
                    <Link to = '/ShoppingCart'> <button className={styles.darkbtn}>Checkout</button> </Link>
                    <Link to = '/store'> <button className={styles.darkbtn}>Continue Shopping</button> </Link>    
                </div>
                </>}
            
               <div>
               <button className={styles.darkbtn} onClick={handleClick}>Add to Cart</button>
               </div>
           </div>
        </div>
    )
}

