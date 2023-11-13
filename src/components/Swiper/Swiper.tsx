"use client";

import styles from "./Swiper.module.scss";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import { ArrowRight } from "react-feather";
import { useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    productName: "Modern light lamp",
    subtitle: "New lamps Collection",
    background:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-bg-01.jpg?v=1679374668",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-img-01.png?v=1677231322",
  },
  {
    id: 2,
    productName: "Modern light lamp",
    subtitle: "New lamps Collection",
    background:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-bg-01.jpg?v=1679374668",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-img-01.png?v=1677231322",
  },
  {
    id: 3,
    productName: "Modern light lamp",
    subtitle: "New lamps Collection",
    background:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-bg-01.jpg?v=1679374668",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-img-01.png?v=1677231322",
  },
];

// type TSwiperItem  = {
//     productImg: string
// }

// function SwiperItem({productImg} : TSwiperItem) {
//     return (

//     )
// }

function HomeSwiper() {

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={1}
        className={styles.swiper}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className={styles.swiperItem}
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className={styles.swiperContentContainer}>
                <motion.div
                  className={styles.swiperTextWraper}
                //   initial={{
                //     scaleY: 0.7,
                //   }}
                //   animate={{
                //     scaleY: 1,
                //   }}
                >
                  <div className={styles.swiperSubtitle}>{item.subtitle}</div>
                  <motion.h1 className={styles.swiperItemName}
                  >{item.productName}</motion.h1>
                  <motion.button
                    className={styles.swiperBtn}
                    whileHover={{
                      color: "#262626",
                      backgroundColor: "#26262600",
                    }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.3,
                    }}
                  >
                    Explore products <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
                <img src={item.productImg} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
