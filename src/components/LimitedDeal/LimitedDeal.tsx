"use client"

import { useEffect, useReducer, useState } from "react"
import { Heading } from "../Collection/Collection"
import styles from "./LimitedDeal.module.scss"

type TAction = {
    type: "increase"
}

type TTimerState = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const initial = { days: 46, hours: 0, minutes: 0, seconds: 59 }

const reducer = ( state: TTimerState , action: TAction ) => {
    if (action.type === "increase") {
        if ( state.hours === 0 && state.minutes === 0 && state.seconds === 0 ) {
            return { days: state.days - 1, hours: 23, minutes: 59, seconds: 59}
        } else if ( state.minutes === 0 && state.seconds === 0 ) {
            return { ...state, hours: state.hours - 1, minutes: 59, seconds: 59 }
        } else if ( state.seconds === 0 ) {
            return { ...state, minutes: state.minutes - 1, seconds: 59} 
        } else {
            return { ...state, seconds: state.seconds - 1}
        }
    } else {
        return state
    }
}

function PriceDealItem() {

    const [ timer, dispatchTimer ] = useReducer(reducer, initial)

    useEffect(() => {
        const timerInterval = setInterval(() => {
            dispatchTimer({type: "increase"})
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [])

    return(
        <div className={styles.priceDealItemContainer}>
            <div className={styles.priceDealItemCard}>
            <img src="https://hongotheme.myshopify.com/cdn/shop/products/decor-product-17.jpg?v=1677067902&width=360" alt="" className={styles.priceDealItemImg} />
            <div className={styles.timer}>
                <div className={styles.days}>{timer.days}</div>
                <div className={styles.hours}>{timer.hours}</div>
                <div className={styles.minutes}>{timer.minutes}</div>
                <div className={styles.second}>{timer.seconds}</div>
            </div>
            </div>
        </div>
    )
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
            </div>
            <div className={styles.limitedRightSide}>
                <Heading header="Lowest price deal" subHeader="LIMITED TIME DEALS"/>
                <PriceDealItem/>
            </div>
        </div>
    )
}

export default LimitedDeal