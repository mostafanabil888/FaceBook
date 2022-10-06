import Head from 'next/head'
import LogIn from '../components/LogIn'
export default function Home() {
  return (
    <>
       <Head>
        <title>LogIn</title>
        <meta name="facebook" content="social media applaction" />
        <link rel="icon" href="/img/Facebook_Logo.png" />
      </Head>
      <LogIn />
    </>
  )
}
