'use client'
import { useEffect, useState } from 'react'
import styles from './products.module.css'
import Product from './product/product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div className={styles.products}>
      {products.map((product) => {
        return <Product key={product._id} product={product} />
      })}
    </div>
  )
}
export default Products
