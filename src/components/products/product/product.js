'use client'
import Image from 'next/image'
import styles from './product.module.css'
import { useBasket } from '@/context/basket'
import { useEffect, useState } from 'react'

const Product = ({ product }) => {
  const { basket, addToBasket } = useBasket()
  const [count, setCount] = useState(1)

  return (
    <div className={styles.product}>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <div className={styles.details}>
        <h3>{product.title}</h3>
      </div>
      <div className={styles.actions}>
        <p className={styles.price}>{product.price} kr.</p>
        <div className={styles.btnFieldAmount}>
          <button
            className={styles.fbBtn}
            onClick={() => addToBasket(product._id, count)}
          >
            Køb {/* {count} */} {/* Sætter count på køb knappen */}
          </button>

          {/* <input
            className={styles.buyProductInputField}
            type='number'
            defaultValue={1}
            onChange={(e) => setCount(e.target.value)}
          /> */}

          <input
            className={styles.buyProductInputField}
            type='number'
            defaultValue={1}
            min={1}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value >= 1) {
                setCount(value)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default Product
