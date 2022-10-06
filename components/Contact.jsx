import React, { useEffect, useState } from 'react'
import styles from '../styles/Contact.module.scss'
export default function Contact() {
  const [user, setuser] = useState([])
  const [inputtext,setinput] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => setuser(actualData.users));
  }, []);
  function HandleSearch (e) {
      const input = e.target.value;
      setinput(input)
  }
    const filteritems = user.filter((contact) => {
    if (inputtext === "") {
      return contact;
  }
  else{
       return contact.firstName.toLowerCase().charAt(0).includes(inputtext)
  }
  })
  return (
    <section className={styles.Contact}>
      <div className={styles.heading}>
          <h2>contact</h2>
          <input onChange={HandleSearch} type="search" name="search"  placeholder='search' />
      </div>
      <div className={styles.Contactbody}>
        {
            filteritems.map((user) => {
              return(
                <div className={styles.ContactBox} key={user.id}>
                  <img src={user.image} className="border rounded-5" alt={user.firstName} width="50" height="50"/>
                  <div className="px-2">
                  <h5>{user.firstName}</h5>
                  <h6>{user.email}</h6>
                  </div>
                </div>
              )
            })
        }
      </div>
    </section>
  )
}
