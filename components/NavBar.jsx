import Link from 'next/link'
import React from 'react'
import styles from '../styles/NavBar.module.scss'
import {AiFillHome,AiTwotoneShop,AiFillCaretDown} from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'

import {MdOutlineVideoLibrary,MdNotificationsNone,MdVideocam,MdNotificationsActive} from 'react-icons/md'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <div className="row">
        <div className="searchbox  d-none d-md-flex align-items-center justify-content-between col-md-4 col-lg-3">
            <img className='me-1 col-2' src='/img/Facebook-logo.svg'/>
            <input className='col-9' type="search" name="search box" placeholder='Search FaceBook' />
        </div>
        <div className={`d-flex align-items-center flex-wrap justify-content-between col-md-6 col-lg-5 col-12 ${styles.links}`}>
           <li><Link href='/'><AiFillHome/></Link></li>
           <li className='d-sm-inline d-none'><MdOutlineVideoLibrary /></li>
           <li><MdNotificationsNone /></li>
           <li><AiTwotoneShop /></li>
           
          
        </div>
        <div className="d-md-flex d-none align-items-center justify-content-around col-2">
        <img className='border rounded-5'  src='/img/mark2.webp' alt='user img' height="50" width="50" />
        <h5 className='col-6 d-lg-inline d-none'>Mark</h5>
        </div>
        <div className={`d-none d-lg-flex flex-wrap  align-items-center justify-content-between col-2 ${styles.flexicons}`}>
            <li><BiCategory /></li>
            <li className='d-sm-inline d-none'><MdNotificationsActive /></li>
            <li><MdVideocam /></li>
            <li><AiFillCaretDown /></li>
        </div>
        </div>
    </nav>
  )
}
