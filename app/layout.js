import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promotopia',
  description: 'Generated prompts for chatGPT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  
          <Provider>

              <Navbar/>
        {children}
        </Provider>

        </body>
    </html>
  )
}
