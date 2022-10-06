import React from 'react'
import styles from "../styles/AddPost.module.scss"
import {BsFillCameraVideoFill,BsEmojiSmile} from "react-icons/bs"
import {GrGallery} from "react-icons/gr"
export default function AddPost() {
  return (
    <section className={styles.AddPost}>
      <div className="d-flex align-items-center pb-3">
            <img src="/img/mark2.webp" alt="account img"
             width="50" height="50" className='border rounded-5 me-3'/>
             <input  type="text" placeholder='What is in your mind ?'/>
        </div>
        <div className={styles.flexicons}>
            <div className="d-flex align-items-center justify-content-between">
                <li>
                    <BsFillCameraVideoFill />
                    <span className='d-none d-lg-block'>Live Video</span>
                </li>
                <li>
                    <GrGallery />
                    <span className='d-none d-lg-block'>Photo/Video</span>
                </li>
                <li>
                    <BsEmojiSmile />
                    <span className='d-none d-lg-block'>Feeling/Activity</span>
                </li>
            </div>
        </div>
    </section>
  )
}
