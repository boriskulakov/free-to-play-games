import './css/globals.css'

import Header from './components/header/header'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import Footer from './components/footer/footer'

import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'

const playFont = Play({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-play',
})

export const metadata: Metadata = {
  title: 'Free-To-Play Games',
  description: 'Откройте для себя лучшие бесплатные игры!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={playFont.className}>
        <Header />
        <StoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  )
}
