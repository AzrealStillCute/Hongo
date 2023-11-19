"use client";

import { useEffect, useReducer, useState } from "react";
import { Heading } from "../Collection/Collection";
import styles from "./LimitedDeal.module.scss";
import { ItemDescription } from "../NewArrival/Item";
import Image from "next/image";

type TAction = {
  type: "increase";
};

type TTimerState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initial = { days: 46, hours: 0, minutes: 0, seconds: 3 };

const reducer = (state: TTimerState, action: TAction) => {
  if (action.type === "increase") {
    if (state.hours === 0 && state.minutes === 0 && state.seconds === 0) {
      return { days: state.days - 1, hours: 23, minutes: 59, seconds: 59 };
    } else if (state.minutes === 0 && state.seconds === 0) {
      return { ...state, hours: state.hours - 1, minutes: 59, seconds: 59 };
    } else if (state.seconds === 0) {
      return { ...state, minutes: state.minutes - 1, seconds: 59 };
    } else {
      return { ...state, seconds: state.seconds - 1 };
    }
  } else {
    return state;
  }
};

function PriceDealItem() {
  const [timer, dispatchTimer] = useReducer(reducer, initial);

  const padZeroDigit = (num: number) => num < 10 ? "0" + String(num) : String(num)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatchTimer({ type: "increase" });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={styles.priceDealItemContainer}>
      <div className={styles.priceDealItemCard}>
        <Image
          src="https://hongotheme.myshopify.com/cdn/shop/products/decor-product-17.jpg?v=1677067902&width=360"
          alt="Price deal item"
          fill
          className={styles.priceDealItemImg}
        />
        <div className={styles.timer}>
          <div className={styles.timeLabel}>
            {padZeroDigit(timer.days)} <p>DAYS</p>
          </div>
          <div className={styles.timeLabel}>
            {padZeroDigit(timer.hours)} <p>HORS</p>
          </div>
          <div className={styles.timeLabel}>
            {padZeroDigit(timer.minutes)} <p>MINS</p>
          </div>
          <div className={styles.timeLabel}>
            {padZeroDigit(timer.seconds)} <p>SECS</p>
          </div>
        </div>
      </div>
      <ItemDescription itemName="Listerby side table" rating={5} prevPrice="25.00" curPrice="23.99"/>
    </div>
  );
}

function LimitedDeal() {
  return (
    <div className={styles.limitedDealContainer}>
      <div className={styles.limitedLeftSide}>
        <div className={styles.pinWrapper}>
          <div className={styles.pin}></div>
        </div>
        <div className={styles.pinWrapper}>
          <div className={styles.pin}></div>
        </div>
        <Image alt="Left limited deal bg" className={styles.limitedLeftSideBg} fill src="https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-home-img-01.jpg?v=1663913311"/>
      </div>
      <div className={styles.limitedRightSide}>
        <Heading header="Lowest price deal" subHeader="LIMITED TIME DEALS" priceDealHeading={true} />
        <PriceDealItem />
        <Image alt="Right limited deal Bg" className={styles.limitedRightSideBg} fill src="https://hongotheme.myshopify.com/cdn/shop/files/demo-decor-home-img-02.jpg?v=1677068607"/>
      </div>
    </div>
  );
}

export default LimitedDeal;
