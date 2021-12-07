import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from './App'
import {Store} from './Components/Store'
import {Nav} from './Components/Nav'
import { ShoppingCart } from './Components/ShoppingCart'
import { ItemDetail } from './Components/ItemDetail'




export const Routes = () => {

    const [cart,setCart] = useState([])

    let inCart = (id) => cart.map((cartItem) => cartItem.id).includes(id)

    const addItem = (item) => {
        if (inCart(item.id) == true) {
            changeQty(item.id,1)
        } else
        setCart([...cart, item])
    }

    const changeQty = (id, delta) => {
        setCart(cart.map((item) => (item.id === id? {...item, Qty: item.Qty + delta}: item )))
       
    }

    const removeItem = (itemID) => {
        setCart(cart.filter(item => item.id !== itemID))
    }

    return (
    <>
        <BrowserRouter >
        <Nav cart={cart} />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/store">
                    <Store addItem={addItem} />
                </Route>
                <Route path='/ShoppingCart'>
                    <ShoppingCart cart={cart} removeItem={removeItem} setCart={setCart} changeQty={changeQty}  />
                </Route>
                <Route path = '/store/:id' 
                    render={(props) => 
                    <ItemDetail {...props}
                     cart={cart}
                     setCart={setCart}
                     addItem={addItem}
                     changeQty={changeQty}/>} />
            </Switch>
        </BrowserRouter>
    </>
    )
}
