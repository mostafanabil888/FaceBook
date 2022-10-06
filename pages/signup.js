import React from 'react'
import SignUp from '../components/SignUp'
import Head from 'next/head'
import Footer from "../components/Footer"
export default function signup() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="facebook" content="social media applaction" />
        <link rel="icon" href="/img/Facebook_Logo.png" />
      </Head>
      <SignUp />
      <Footer />
    </>
  )
}
