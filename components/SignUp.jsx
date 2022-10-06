import React, { useState } from 'react';
import styles from '../styles/SignUp.module.scss'
import Link from 'next/link'
export default function SignUp() {
    //this for year list 
    let minOffset = 0, maxOffset = 30;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for (let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }
    const yearList = allYears.map((x) => { return (<option key={x}>{x}</option>) });
    //this for month
    const monthList = [
    {
        id : 1,
        "month" : "January"
    },
    {
        id : 2,
        "month" : "February"
    }, 
    {
        id : 3,
        "month" : "March"
    },
    {
        id : 4,
        "month" : "April"
    },
    {
        id : 5,
        "month" : "May"
    },
    {
        id : 6,
        "month" : "June"
    },
    {
        id : 7,
        "month" : "July"
    },
    {
        id : 8,
        "month" : "August"
    },
    {
        id : 9,
        "month" : "September"
    },
    {
        id : 10,
        "month" : "October"
    },
    {
        id : 11,
        "month" : "November"
    },
    {
        id : 12,
        "month" : "December"
    }
    ]
    const months = monthList.map((month) => {
        return <option key={month.id}>{month.month}</option>
    })
 
    return (
        <section className={`p-4 p-md-5 ${styles.SignUp}`}>
            <div>
                <div className='d-flex mb-2 justify-content-center'>
                    <img src='/img/logo-2.svg' alt='facebook logo' title="facebook" width="200" />
                </div>
                <div className={` ${styles.formbox}`}>
                    <div className={styles.FormHeader}>
                        <h1>Create a new account</h1>
                        <span>its quick and easy.</span>
                    </div>
                    <form>
                        <div className='row mb-3'>
                            <div className='col-md-6 col-12 mb-2'>
                                <input className='w-100' type="text" name="First Name" placeholder='First Name' />
                            </div>
                            <div className='col-md-6 col-12'>
                                <input className='w-100' type="text" name="last Name" placeholder='last Name' /></div>
                        </div>
                        <div>
                            <input className='w-100 col-12 mb-3' type="email" name="email" placeholder='Email' />
                            <input className='w-100 col-12 mb-3' type="password" name="password" placeholder='Password' />
                            <input className='w-100 col-12 mb-3' type="password" name="reset password" placeholder='Confirm Password' />
                        </div>
                       
                        <div className='row mb-3'>
                        <h6>Date of birth ?</h6>
                            <div className='col-6'>
                                <select className='w-100'>{yearList}</select>
                            </div>
                            <div className='col-6'>
                                <select className='w-100'>{months}</select>
                            </div>
                        </div>
                        <p><input className={styles.checkBox} type="checkbox" name="checkbox" />By clicking Sign Up, you agree to the facebook (Saddam)
                            User Agreement, Privacy Policy, and Cookie Policy.. You may
                            receive SMS notifications from me and can opt out at any time.</p>
                        <div className={styles.LoginBtn} >
                            <Link href='/home' >Sign Up</Link>
                        </div>
                        <div className={styles.GoogleBtn} >
                            <Link href='/'>Join with Google</Link>
                        </div>
                        <span>or</span>
                        <div className={styles.HaveAccount} >
                            <Link href='/' >Already have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
