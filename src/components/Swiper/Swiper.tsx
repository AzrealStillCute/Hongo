"use client";

import styles from "./Swiper.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/effect-creative";
import "swiper/scss/pagination";

import { ArrowRight } from "react-feather";
import { useRef } from "react";
import Cursor from "./Cursor";
import Image from "next/image";

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
    productName: "Router signals",
    subtitle: "Wi-Fi connection",
    background:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-bg-02.jpg?v=1679374668",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-img-02.png?v=1677231322",
  },
  {
    id: 3,
    productName: "Grocery container",
    subtitle: "Containers for storage",
    background:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-bg-03.jpg?v=1679374667",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-slider-img-03.png?v=1677231322",
  },
];

function HomeSwiper() {
  const containerRef = useRef<HTMLDivElement>(null);

  const subtitleVarients = {
    active: {
      translateY: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8 },
    },
    inActive: {
      translateY: -14,
      opacity: 0,
    },
  };

  const nameVarients = {
    active: {
      rotateX: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6, delay: 0.2 },
    },
    inActive: {
      rotateX: 60,
      opacity: 0,
    },
  };

  const buttonVarients = {
    active: {
      rotateX: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6, delay: 0.5 },
    },
    inActive: {
      rotateX: 40,
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={styles.swiperContainer}
    >
      <Swiper
        modules={[EffectCreative, Pagination]}
        pagination={{
          clickable: true,
          horizontalClass: styles.paginationHorizontal,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
        }}
        slidesPerView={1}
        className={styles.swiper}
        effect={"creative"}
        loop={true}
        speed={800}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className={styles.swiperItem}
              style={{ backgroundImage: `url(${item.background})` }}
            >
              {({ isActive }) => {
                return (
                  <div className={styles.swiperContentContainer}>
                    <div className={styles.swiperItemImg}>
                      <Image alt="product_img" src={item.productImg} />
                    </div>
                    <motion.div
                      variants={subtitleVarients}
                      animate={isActive ? "active" : "inActive"}
                      className={styles.swiperTextWraper}
                    >
                      <div className={styles.swiperSubtitle}>
                        {item.subtitle}
                      </div>
                      <motion.h1
                        variants={nameVarients}
                        className={styles.swiperItemName}
                      >
                        {item.productName}
                      </motion.h1>
                      <motion.button
                        className={styles.swiperBtn}
                        variants={buttonVarients}
                      >
                        Explore products <ArrowRight size={16} />
                      </motion.button>
                    </motion.div>
                  </div>
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Cursor containerRef={containerRef}/>
    </motion.div>
  );
}

export default HomeSwiper;
