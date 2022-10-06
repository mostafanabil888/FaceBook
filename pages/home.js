import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Head from 'next/head'
export default function home() {
  return (
    <>
     <Head>
        <title>Home</title>
        <meta name="facebook" content="social media applaction" />
        <link rel="icon" href="/img/Facebook_Logo.png" />
      </Head>
      <NavBar />
      <Header />
    </>
  )
}
