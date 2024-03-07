import Navigation from '@/components/navigation/navBar/navigation'
import './globals.css'
import { quicksandFont } from '@/utils/fonts'
import { BasketContextProvider } from '@/context/basket'

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={quicksandFont.className}>
        <BasketContextProvider>
          <Navigation />
          {children}
        </BasketContextProvider>
      </body>
    </html>
  )
}
