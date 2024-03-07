'use client'
import Product from '@/components/products/product/product'
import styles from './page.module.css'
import Products from '@/components/products/products'

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.productWrapper}>
        <Products />
      </div>
    </main>
  )
}
