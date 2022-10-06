import React, { useState,useEffect } from 'react'
import styles from "../styles/CreateRoom.module.scss"
import {BsFillCameraVideoFill} from "react-icons/bs"
export default function CreateRoom() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://mocki.io/v1/c0395fbd-fcf1-4871-bf74-7b2672e33e76`)
            .then((response) => response.json())
            .then((actualData) => setdata(actualData));
    }, []);
  return (
    <section className={styles.CreateRoom}>
        <div className="row align-items-center justify-content-between">
            <div className={`d-md-block d-none col-md-4 ${styles.btn}`}>
                <BsFillCameraVideoFill />
                <span>Create Room</span>
            </div>
            <div className="img-box d-flex col-md-8 col-12 overflow-hidden align-items-center justify-content-between ">
                {
                    data.map((user) => {
                        return(
                                <img className='border rounded-5' height="40" src={user.src} width="40" alt={user.title} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
