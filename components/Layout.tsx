import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title ? title + ' - AIRNORM' : 'AIRNORM'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </div>
)

export default Layout
