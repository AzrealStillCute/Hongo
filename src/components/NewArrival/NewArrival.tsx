import styles from "./NewArrival.module.scss";
import { Heading } from "../Collection/Collection";
import Item from "./Item";

const newArrivalItems = [
  {
    id: 1,
    itemName: "Wall clock gray pink",
    rating: 5,
    prevPrice: "25.00",
    curPrice: "22.99",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-04.jpg?v=1663909840&width=165",
  },
  {
    id: 2,
    itemName: "Sockeraert vase black",
    rating: 4,
    prevPrice: "21.00",
    curPrice: "15.00",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-14.jpg?v=1663915638&width=360",
  },
  {
    id: 3,
    itemName: "Decorative mirror",
    rating: 5,
    prevPrice: "12.00",
    curPrice: "10.99",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-12.jpg?v=1663914693&width=360",
  },
  {
    id: 4,
    itemName: "Speaker with lamp",
    rating: 5,
    prevPrice: "17.99",
    curPrice: "19.99",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-10_8c065b6a-17b4-4c74-960a-4bec6f8d700c.jpg?v=1663913890&width=165",
  },
  {
    id: 5,
    itemName: "Wifi speaker lamp",
    rating: 5,
    prevPrice: "25.00",
    curPrice: "18.99",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-06.jpg?v=1663910806&width=360",
  },
  {
    id: 6,
    itemName: "Fejka artificial plant",
    rating: 5,
    prevPrice: "17.00",
    curPrice: "12.00",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-16.jpg?v=1663916472&width=360",
  },
  {
    id: 7,
    itemName: "Konstfull vase",
    rating: 4,
    prevPrice: "30.00",
    curPrice: "22.00",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-03.jpg?v=1663908269&width=360",
  },
  {
    id: 8,
    itemName: "Vardande plant pot",
    rating: 5,
    prevPrice: "27.00",
    curPrice: "16.00",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-15.jpg?v=1663916122&width=360",
  },
  {
    id: 9,
    itemName: "Palm leaf handmade",
    rating: 5,
    prevPrice: "16.00",
    curPrice: "12.00",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-13.jpg?v=1663915222&width=360",
  },
  {
    id: 10,
    itemName: "Artificial potted plant",
    rating: 4,
    prevPrice: "22.00",
    curPrice: "23.99",
    productImg:
      "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-07.jpg?v=1663911622&width=360",
  },
];

function NewArrival() {
  return (
    <div className={styles.newArriavlContainer}>
      <Heading header="Our new arrivals" subHeader="TRENDING PRODUCTS" />
      <div className={styles.itemsContainer}>
        {newArrivalItems.map((item) => {
          return (
            <Item
              key={item.id}
              itemName={item.itemName}
              rating={item.rating}
              prevPrice={item.prevPrice}
              curPrice={item.curPrice}
              productImg={item.productImg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
