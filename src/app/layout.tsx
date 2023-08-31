import './css/globals.css'

import type { Metadata } from 'next'
import { Play } from 'next/font/google'

const playFont = Play({ weight: '400', subsets: ['latin', 'cyrillic'] })

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
      <body className={playFont.className}>{children}</body>
    </html>
  )
}
