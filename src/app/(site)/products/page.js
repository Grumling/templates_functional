import Image from 'next/image'
import styles from './page.module.css'
import Products from '@/components/products/products'

const Page = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerHeroText}>
          <h1>
            <p className={styles.headerHeroTextHeader}>skønne</p>
            <p className={styles.headerHeroTextHeader}>produkter</p>
            <p className={styles.headerHeroTextSubHeader}>
              herunder finder du alle vores produkter
            </p>
          </h1>
        </div>
        <Image
          className={styles.productsHeader}
          src='/products.jpg'
          alt='hero'
          objectFit='cover'
          width={1920}
          height={1080}
        />
      </div>

      <div className={styles.productsWrapper}>
        <h1 className={styles.productsHeader}>
          Alt er <span className={styles.highlight}>skønhed</span>
        </h1>
      </div>

      <div className={styles.productsCardWrapper}>
        <Products />
      </div>
    </div>
  )
}

export default Page
