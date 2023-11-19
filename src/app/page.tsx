import styles from './page.module.scss'
import Collection from '@/components/Collection/Collection'
import HomeSwiper from '@/components/Swiper/Swiper'
import NewArrival from '@/components/NewArrival/NewArrival'
import LimitedDeal from '@/components/LimitedDeal/LimitedDeal'
import Popular from '@/components/Popular/Popular'
import Image from 'next/image'
import Brands from '@/components/Brands/Brands'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <HomeSwiper/>
          <Collection/>
          <NewArrival/>
          <LimitedDeal/>
          <Popular/>
          <div className={styles.bannerImgContainer}>
            <Image className={styles.bannerImg} alt='Home banner' src='https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-home-img-03.jpg?v=1677142024' fill/>
          </div>
          <Brands/>
      </div>
    </>
  )
}
