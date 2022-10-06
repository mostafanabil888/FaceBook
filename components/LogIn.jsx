import Link from 'next/link'
import React from 'react'
import styles from '../styles/LogIn.module.scss'
import {FcGoogle} from 'react-icons/fa'
import Footer from './Footer'
export default function LogIn() {
  return (
    <div className={`p-4 p-md-5 ${styles.LogIn}`}>
       <div>
       <div className='d-flex mb-2 justify-content-center'>
       <img src='/img/logo-2.svg' alt='facebook logo' title="facebook" width="200"/>
       </div>
        <form>
            <h1>Log in to Facebook</h1>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Password (6 or more characters)</label>
            <input type="password" name="email"/>
            <div className={styles.LoginBtn} >
            <Link href='/home' >Log In</Link>
            </div>
            <div className={styles.GoogleBtn} >
            <Link href='/home'>Join with Google</Link>
            </div>
            <span>or</span>
            <div className={styles.NewAccount} >
            <Link href='/signup' >SIGN UP</Link>
            </div>
        </form>
        <Footer />
       </div>
    </div>
  )
}
