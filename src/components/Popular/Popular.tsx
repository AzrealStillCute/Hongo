import styles from "./Popular.module.scss"
import { Heading } from "../Collection/Collection"
import Item from "../NewArrival/Item"

const popularItems = [
    {
        id: 1,
        itemName: "Speaker with lamp",
        rating: 5,
        prevPrice: "17.99",
        curPrice: "19.99",
        productImg:
          "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-10_8c065b6a-17b4-4c74-960a-4bec6f8d700c.jpg?v=1663913890&width=165",
      },
      {
        id: 2,
        itemName: "Palm leaf handmade",
        rating: 5,
        prevPrice: "16.00",
        curPrice: "12.00",
        productImg:
          "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-13.jpg?v=1663915222&width=360",
      },
    {
        id: 3,
        itemName: "Wall clock gray pink",
        rating: 5,
        prevPrice: "25.00",
        curPrice: "22.99",
        productImg:
          "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-04.jpg?v=1663909840&width=165",
    },
    {
        id: 4,
        itemName: "Vardande plant pot",
        rating: 5,
        prevPrice: "27.00",
        curPrice: "16.00",
        productImg:
          "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-15.jpg?v=1663916122&width=360",
      },
      {
        id: 5,
        itemName: "Fejka artificial plant",
        rating: 5,
        prevPrice: "17.00",
        curPrice: "12.00",
        productImg:
          "https://hongotheme.myshopify.com/cdn/shop/products/decor-product-16.jpg?v=1663916472&width=360",
      }
]

function Popular() {
    return (
        <div>
            <Heading header="Popular products" subHeader="PEOPLE ALSO LOVE"/>
            <div className={styles.popularItemsContainer}>
                {
                    popularItems.map(item => {
                        return (
                            <Item key={item.id} itemName={item.itemName} productImg={item.productImg} rating={item.rating} prevPrice={item.prevPrice} curPrice={item.curPrice}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Popular