import React from 'react'
import 'bootstrap//dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styles from './Nav.module.css'


export const Nav = () => {
    return (
        <div className={styles.main}>
        <nav className='navbar navbar-light text-light'>
            <h2> <Link to ='/' className={styles.link}> React Shopping Cart</Link> </h2>
           <h2>
           <Link to ='/store' className={styles.link}>
               Store
           </Link>
           </h2>
           <h2>
            <Link to ='/ShoppingCart' className={styles.link}>
            <AiOutlineShoppingCart/>
           
           </Link>
           </h2>

        </nav>
        </div>
    )
}
