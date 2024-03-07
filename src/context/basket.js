'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const BasketContext = createContext()

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  useEffect(() => {
    const basket = localStorage.getItem('basket')
    if (basket) {
      setBasket(JSON.parse(basket))
    }
  }, [])

  const addToBasket = (id, amount = 1) => {
    let basket = localStorage.getItem('basket')
    if (basket) {
      basket = JSON.parse(basket)

      let itemInBasket = basket.find((item) => item.id === id)
      console.log(itemInBasket)

      if (itemInBasket) {
        let sum = parseInt(itemInBasket.amount) + parseInt(amount)

        itemInBasket.amount = sum
      } else {
        basket.push({
          id: id,
          amount: amount,
        })
      }
    } else {
      basket = []
      basket.push({
        id: id,
        amount: amount,
      })
    }

    localStorage.setItem('basket', JSON.stringify(basket))
    setBasket(basket)
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => useContext(BasketContext)
