import React  from 'react'
import styles from '../styles/post.module.scss'
import { AiFillHeart, AiFillSmile, AiFillLike } from 'react-icons/ai'
export default function Post({post}) {
  return (
    <section>
      <div>
        {
          post ?.map((post) => {

            return (
              <div className={styles.post} key={post.id}>
                <div className="d-flex justify-content-start align-items-center">
                  <img className='border rounded-5 me-2' src={post.image} width="50" />
                  <div className="mt-1">
                    <h3>{post.firstName}</h3>
                    <span>{post.birthDate}</span>
                  </div>

                </div>
                <p>{post.userAgent}</p>
                <div className={styles.reactbox}>
                  <div className='d-flex align-items-center'>
                    <div className="d-flex align-items-center">
                      <AiFillLike />
                      <AiFillHeart />
                      <AiFillSmile />
                    </div>
                    <span>{post.age}</span>
                  </div>
                  <div>
                    <span>{post.height}  Comments</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <span>like</span>
                  <span>comment</span>
                  <span>share</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
