import React from 'react'
import {FaBirthdayCake} from "react-icons/fa"
export default function BirthDays() {
  return (
    <section className='bg-white mb-4 p-3 my-2'>
       <div className="d-flex align-items-center mb-3">
        <FaBirthdayCake className='display-6 text-success' />
       <span className='px-2'>Birthdays</span>
       </div>
       <h6><span className='px-2'>Mark Zuckerberg</span>Birthdays is today</h6>
    </section>
  )
}
