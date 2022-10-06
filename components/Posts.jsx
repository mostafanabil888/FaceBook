import React, { useEffect, useState } from 'react'
import styles from "../styles/Posts.module.scss"
import Post from './Post';
export default function Posts() {
    const [post, setpost] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then((response) => response.json())
            .then((actualData) => setpost(actualData));
    }, []);
  return (

    <section className={styles.Posts}>
        <Post post={post.users}/>
    </section>
  )
}
