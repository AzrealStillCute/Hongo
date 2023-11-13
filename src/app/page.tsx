import AnnounceBar from '@/components/AnnounceBar/AnnounceBar'
import styles from './page.module.scss'
import NavBar from '@/components/NavBar/NavBar'
import Swiper from '@/components/Swiper/Swiper'
import Collection from '@/components/Collection/Collection'
import HomeSwiper from '@/components/Swiper/Swiper'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <AnnounceBar/>
        <NavBar/>
        <div className={styles.bodyContent}>
          <HomeSwiper/>
          <Collection/>
        </div>
      </div>
    </>
  )
}
