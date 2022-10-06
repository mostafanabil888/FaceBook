import React, { useState } from 'react'
import NavBar from './NavBar'
import OtherLinks from './OtherLinks'
import Posts from './Posts'
import Contact from './Contact'
import Stories from './Stories'
import AddPost from './AddPost'
import CreateRoom from './CreateRoom'
import BirthDays from './BirthDays'
export default function Header() {
  return (
    <header className='pt-4 container-fluid'>
        <div className="row">
           <div className="d-md-inline d-none col-md-3">
            <OtherLinks/>
           </div>
           <div className="col-md-9 col-lg-6 col-12  px-md-5">
            <Stories />
            <AddPost  />
            <CreateRoom />
            <Posts />
           </div>
           <div className="d-lg-inline d-none col-md-3">
            <BirthDays />
            <Contact />
           </div>
        </div>
    </header>
  )
}
