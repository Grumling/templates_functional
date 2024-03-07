'use client'
import Link from 'next/link'
import styles from './navCart.module.css'
import { FaCartShopping } from 'react-icons/fa6'
import { useState } from 'react'

const NavCart = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navigation}>
      <div className={styles.cart}>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaCartShopping className={styles.cart}></FaCartShopping>
          ) : (
            <FaCartShopping className={styles.cart}></FaCartShopping>
          )}
        </div>
      </div>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <p>Cart is empty.</p>
      </div>
    </nav>
  )
}

export default NavCart
