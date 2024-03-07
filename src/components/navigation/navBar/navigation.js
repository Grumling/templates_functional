'use client'
import Link from 'next/link'
import styles from './navigation.module.css'
import { FaBars } from 'react-icons/fa'
import { FaBarsStaggered, FaFaceSadTear, FaBagShopping } from 'react-icons/fa6'
import { useState } from 'react'
import Image from 'next/image'
import { useBasket } from '@/context/basket'
import Basket from '@/components/basket/basket'

/* -------------------------------------------------------------------------------- */

// EmptyBasket component, to be displayed when the basket is empty
/* const EmptyBasket = () => {
  return (
    <div>
      <p>
        Din kurv er tom <FaFaceSadTear />
      </p>
    </div>
  )
} */

// BasketFull component, to be displayed when the basket is not empty
/* const BasketFull = () => {
  return <div></div>
} */

/* -------------------------------------------------------------------------------- */

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const { basket, name } = useBasket()

  /* toggle for the nav menu */
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsOpenCart(false)
  }

  /* toggle for the cart */
  const toggleCart = () => {
    setIsOpenCart(!isOpenCart)
    setIsOpen(false)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/smuknu_logo.png'
              alt={'SmukNu Logo'}
              width={4989}
              height={1349}
              className={styles.image}
            ></Image>
          </Link>
        </div>
        <div className={styles.menuDirection}>
          {/* CART ICON */}
          <div onClick={toggleCart}>
            <div className={styles.cartCounter}>{basket.length}</div>
            {isOpenCart ? (
              <FaBagShopping className={styles.bars} />
            ) : (
              <FaBagShopping className={styles.bars} />
            )}
          </div>
          {/* BURGER MENU ICON */}
          <div onClick={toggleMenu}>
            {isOpen ? (
              <FaBarsStaggered className={styles.bars}></FaBarsStaggered>
            ) : (
              <FaBars className={styles.bars}></FaBars>
            )}
          </div>{' '}
        </div>
      </div>

      {/* MENU */}
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <Link href='/'>Forside</Link>
        <Link href='/products'>Vores produkter</Link>
        <Link href='/sundhed'>Spørg om sundhed</Link>
        <Link href='/medlem'>Bliv medlem</Link>
      </div>

      {/* CART */}
      <div
        className={`${styles.dropdownCart} ${isOpenCart ? styles.open : ''}`}
      >
        {/* {basket.length === 0 ? <EmptyBasket /> : <BasketFull />} */}
        {<Basket />}
      </div>
    </nav>
  )
}

export default Navigation
