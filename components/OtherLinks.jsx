import React from 'react'
import styles from '../styles/OtherLinks.module.scss'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillStarFill, BsShopWindow, BsClockHistory, BsFlagFill, BsFillHeartFill, BsCalendarEvent, BsBagFill } from 'react-icons/bs'
import { MdGroups, MdVideoLibrary, MdOutlineOndemandVideo, MdOutlineGames } from 'react-icons/md'
import { TiWeatherSunny } from 'react-icons/ti'
export default function OtherLinks() {
  return (
    <section className={styles.OtherLinks}>
      <div className={`d-flex align-items-center ${styles.heading}`}>
        <img className='border rounded-5 me-3' src='/img/mark2.webp' width='40' height='40' />
        <h5>Mark</h5>
      </div>
      <ol>
        <li>
          <FaUserFriends />
          <span>Friends</span>
        </li>
        <li>
          <MdGroups />
          <span>groups</span>
        </li>
        <li>
          <BsShopWindow />
          <span>MarketPlace</span>
        </li>
        <li>
          <MdVideoLibrary />
          <span>Watch</span>
        </li>
        <li>
          <BsClockHistory />
          <span>Memories</span>
        </li>
        <li>
          <BsFlagFill />
          <span>Pages</span>
        </li>
       
        <li>
          <BsFillHeartFill />
          <span>Covid19 Information</span>
        </li>
        <li>
          <BsCalendarEvent />
          <span>Events</span>
        </li>
        <li>
          <BsBagFill />
          <span>Jobs</span>
        </li>
        <li>
          <FaUserFriends />
          <span>Friends List</span>
        </li>
        <li>
          <MdOutlineOndemandVideo />
          <span>Live Videos</span>
        </li>
        <li>
          <BsFillStarFill />
          <span>Favorites</span>
        </li>
        <li>
          <MdOutlineGames />
          <span>Video Games</span>
        </li>
        <li>
          <TiWeatherSunny />
          <span>Weather</span>
        </li>
      </ol>

    </section>
  )
}
