import styles from "./Testimonial.module.scss"

function Testimonial() {
    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.testimonialHeaderContainer}>
                <h1 className={styles.testimonialHeader}></h1>
                <div className={styles.navigatorsContainer}>
                    <div className={styles.rightNavigators}></div>
                    <div className={styles.leftNavigators}></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial