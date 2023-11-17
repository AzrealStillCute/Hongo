import styles from './page.module.scss'
import Collection from '@/components/Collection/Collection'
import HomeSwiper from '@/components/Swiper/Swiper'
import NewArrival from '@/components/NewArrival/NewArrival'
import LimitedDeal from '@/components/LimitedDeal/LimitedDeal'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <HomeSwiper/>
          <Collection/>
          <NewArrival/>
          <LimitedDeal/>
      </div>
    </>
  )
}
