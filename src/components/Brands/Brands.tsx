import Image from "next/image"
import styles from "./Brands.module.scss"
import Link from "next/link"
import { ArrowRight } from "react-feather"

function Brands() {
    return(
        <div className={styles.brandsContainer}>
            <div className={styles.brandLogosContainer}>
                <div className={styles.logoWrapper}>
                <Image className={styles.logo} fill alt="Target" src="https://hongotheme.myshopify.com/cdn/shop/files/decor-clients-01.png?v=1673358233"/>
                </div>
                <div className={styles.logoWrapper}>
                <Image className={styles.logo} fill alt="Gubi" src="https://hongotheme.myshopify.com/cdn/shop/files/decor-clients-02.png?v=1673356852"/>
                </div>
                <div className={styles.logoWrapper}>
                <Image className={styles.logo} fill alt="Baro" src="https://hongotheme.myshopify.com/cdn/shop/files/decor-clients-03.png?v=1673425363"/>
                </div>
                <div className={styles.logoWrapper}>
                <Image className={styles.logo} fill alt="Moda" src="https://hongotheme.myshopify.com/cdn/shop/files/decor-clients-04.png?v=1673356852"/>
                </div>
                <div className={styles.logoWrapper}>
                <Image className={styles.logo} fill alt="Feather" src="https://hongotheme.myshopify.com/cdn/shop/files/decor-clients-05.png?v=1673358247"/>
                </div>
            </div>
            <div className={styles.brandsTextContainer}>
                <span className={styles.brandsText}>Most trending decor brands waiting for you.</span>
                <span className={styles.shopNowLink}><strong>Shop now</strong><ArrowRight size={15}/></span>
            </div>
        </div>
    )
}

export default Brands