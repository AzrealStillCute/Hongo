import { Eye, Heart, Layers, Package } from "react-feather";
import styles from "./Item.module.scss";
import { Star } from "@phosphor-icons/react/dist/ssr";

type TActionBtnProps = {
  type: "wishlist" | "compare";
};

function ActionBtn({ type }: TActionBtnProps) {
  return (
    <button
      className={`${styles.actionBtn}  ${
        type === "wishlist" ? styles.wishlistBtn : styles.compareBtn
      }`}
    >
      {type === "wishlist" ? <Heart size={15} /> : <Layers size={15} />}
      <div className={styles.actionBtnTooltip}>
        Add to {type} <span className={styles.triangle}></span>
      </div>
    </button>
  );
}

type TProductBtnProps = {
  type: "options" | "views";
};

function ProductBtn({ type }: TProductBtnProps) {
  return (
    <button
      className={`${styles.productBtn}  ${
        type === "options" ? styles.optionBtn : styles.viewBtn
      }`}
    >
      <div className={`${styles.activeProductBtn} ${styles.productBtnContent}`}>
        {type === "options" ? <Package size={16} /> : <Eye size={15} />}
        {type === "options" ? "SELECT OPTIONS" : "QUICK VIEWS"}
      </div>
      <div
        className={`${styles.inActiveProductBtn} ${styles.productBtnContent}`}
      >
        {type === "options" ? (
          <Package size={16} color="white" />
        ) : (
          <Eye size={15} color="white" />
        )}
        {type === "options" ? "SELECT OPTIONS" : "QUICK VIEWS"}
      </div>
    </button>
  );
}

type TItemProps = {
  itemName: string
  rating: number
  prevPrice: string
  curPrice: string
  productImg: string
}

function Item({ itemName, rating, prevPrice, curPrice, productImg }: TItemProps) {
  const starCreator = (rating: number) => Array.from({ length: 5 }, (_, index) => {
    if (index === rating) {
      return <Star key={index + 1} weight="fill" color="gray" size={15} />;
    } else {
      return <Star key={index + 1} weight="fill" size={15} color="#262626" />;
    }
  });

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.item}>
        <img
          className={styles.productImg}
          src={productImg}
        />
        <div className={styles.actionBtnContainer}>
          <ActionBtn type="wishlist" />
          <ActionBtn type="compare" />
        </div>
        <div className={styles.productsBtnContainer}>
          <ProductBtn type="options" />
          <ProductBtn type="views" />
        </div>
      </div>
      <div className={styles.smallViewProductBtnContainer}>
        <button className={styles.smallViewProductBtn}><Package size={16} color="gray" fontWeight="light"/></button>
        <button className={styles.smallViewProductBtn}><Eye size={16} color="gray" fontWeight="light"/></button>
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.itemRating}>{starCreator(rating)}</div>
        <div className={styles.itemName}>{itemName}</div>
        <div className={styles.itemPrice}>
          <span className={styles.firstPrice}>${prevPrice}</span>
          <span className={styles.secondPrice}>${curPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
