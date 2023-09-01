'use client'

import styles from './css/page.module.css'

import theme from '@/theme/themeConfig'
import SearchSettings from './components/searchSettings/searchSettings'
import Games from './components/games/games'

import { ConfigProvider } from 'antd'

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <div className="container">
        <main className={styles.main}>
          <SearchSettings />
          <Games />
        </main>
      </div>
    </ConfigProvider>
  )
}
