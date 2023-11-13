import { ArrowRight } from "react-feather"
import styles from "./Collection.module.scss"

type THeading = {
    header: string
    subHeader: string
}

function Heading({ header, subHeader }: THeading) {
    return(
        <div className={styles.headingContainer}>
            <span className={styles.subHeader}>{subHeader}</span>
            <h3 className={styles.header}>{header}</h3>
        </div>
    )
}

function CollectionItem() {
    return (
        <div className={styles.collectionItem}>
            <button className={styles.collectionBtn}>
                <h5>Living Room</h5>
                <span>12 ITEMS</span>
                <ArrowRight className={styles.collectionIcon}/>
            </button>
        </div>
    )
}

function Collection() {
    return (
        <div>
            <Heading header="Decor collection" subHeader="SHOP BY CATEGORIES"/>
            <div className={styles.collection}>
                <CollectionItem/>
            </div>
        </div>
    )
}

export default Collection