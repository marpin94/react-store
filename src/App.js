import React from 'react'
import {Link } from 'react-router-dom'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.home}>
    
        <div className='text-center'>
          <button className='btn btn-dark btn-lg'>
            <Link to ='/store' style={{color:'white'}} > View Store</Link> 
          </button>
        </div>

   
    </div>
  );
}

export default App;
