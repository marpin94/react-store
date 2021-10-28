import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {items} from '../Data/items'
import styles from './Store.module.css'

export const Store = () => {

    return (
            <div className={styles.main}>
            {items.map(item => 
                <div className ='card m-sm-5' key={item.id}>
                    <img className="card-img-top" src={`https://source.unsplash.com/${item.imageId}/400x500`} alt="Card image cap"></img>
                   <Link to={`/Store/${item.id}`} className={styles.link}><h2 className='card-title text-center'> {item.item} </h2> </Link>
                   <h2 className='card-body text-center'> ${item.price} </h2>
                </div>)}
            </div>
    )
}

