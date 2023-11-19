import { ArrowRight } from "react-feather";
import styles from "./Collection.module.scss";

type THeading = {
  header: string;
  subHeader: string;
  priceDealHeading?: boolean
};

const collectionItems = [
  {
    id: 1,
    productName: "Living room",
    itemsCount: "12",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/collections/demo-decor-collection-img-01.jpg?v=1670316448&width=360",
  },
  {
    id: 2,
    productName: "Modern painting",
    itemsCount: "12",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/collections/demo-decor-collection-img-02.jpg?v=1670316483&width=360",
  },
  {
    id: 3,
    productName: "Clay pots",
    itemsCount: "15",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/collections/demo-decor-collection-img-03.jpg?v=1670316516&width=360",
  },
  {
    id: 4,
    productName: "Classic table",
    itemsCount: "12",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/collections/demo-decor-collection-img-04.jpg?v=1670316552&width=360",
  },
  {
    id: 5,
    productName: "Home office",
    itemsCount: "12",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/collections/demo-decor-collection-img-05.jpg?v=1677128004&width=360",
  },
];

export function Heading({ header, subHeader, priceDealHeading }: THeading) {
  return (
    <div className={`${styles.headingContainer} ${priceDealHeading && styles.priceDealHeading}`}>
      <span className={styles.subHeader}>{subHeader}</span>
      <h3 className={styles.header}>{header}</h3>
    </div>
  );
}

type TCollectionItem = {
  productName: string;
  itemsCount: string;
  productImg: string;
};

function CollectionItem({
  productName,
  itemsCount,
  productImg,
}: TCollectionItem) {

  return (
      <div className={styles.collectionItemWrapper}>
        <div className={styles.collectionItem}>
        <img src={productImg} className={styles.collectionImg}/>
      <button className={styles.collectionBtnOuter}>
        <div className={styles.collectionBtnInner}>
          <h5>{productName}</h5>
          <span>{itemsCount} ITEMS</span>
          <ArrowRight size={18} color="white" className={styles.collectionIcon} />
        </div>
      </button>
    </div>
      </div>
  );
}

function Collection() {
  return (
    <div className={styles.collectionContainer}>
      <Heading header="Decor collection" subHeader="SHOP BY CATEGORIES" />
      <div className={styles.collection}>
        {collectionItems.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              productName={item.productName}
              itemsCount={item.itemsCount}
              productImg={item.productImg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
