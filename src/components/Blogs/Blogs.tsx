import { Heading } from "../Collection/Collection"
import styles from "./Blogs.module.scss"
import Image from "next/image"

type TBlogProps = {
    blogImage: string
    blogImageAlt: string
    blogTitle: string
    blogArthur: string
}

function Blog({ blogImage, blogImageAlt, blogTitle, blogArthur }: TBlogProps) {
    return (
        <div className={styles.blog}>
            <div className={styles.blogImgContainer}>
                <Image className={styles.blogImage} alt={blogImageAlt} src={blogImage} fill/>
                <span className={styles.blogLabel}>DECOR</span>
            </div>
            <div className={styles.blogTextContainer}>
                <h5 className={styles.blogTitle}>{blogTitle}</h5>
                <span className={styles.blogArthur}>By {blogArthur}</span>
            </div>
        </div>
    )
}

const blogs = [
    {
        id: 1,
        blogTitle: "Have no fear of perfection you will never reach it",
        blogArthur: "Alexie Rechards",
        blogImage: "https://hongotheme.myshopify.com/cdn/shop/articles/demo-decor-blog-img-12_6dde710c-70fe-4fe8-a2e1-dbd0e6f16179.jpg?v=1677132408",
        blogImageAlt: "Blog1 Img"
    },
    {
        id: 2,
        blogTitle: "One should never be the oldest thing in one's house",
        blogArthur: "Alexie Rechards",
        blogImage: "https://hongotheme.myshopify.com/cdn/shop/articles/demo-decor-blog-img-02.jpg?v=1677132386",
        blogImageAlt: "Blog2 Img"
    },
    {
        id: 3,
        blogTitle: "Everything has a place, and everything in its place",
        blogArthur: "Alexie Rechards",
        blogImage: "https://hongotheme.myshopify.com/cdn/shop/articles/demo-decor-blog-img-10.jpg?v=1677132351&width=360",
        blogImageAlt: "Blog3 Img"
    },
    {
        id: 4,
        blogTitle: "Every design choice we make has a sensual effect on us",
        blogArthur: "Alexie Rechards",
        blogImage: "https://hongotheme.myshopify.com/cdn/shop/articles/demo-decor-blog-img-06.jpg?v=1677132111&width=360",
        blogImageAlt: "Blog4 Img"
    },
]

function Blogs() {
    return(
        <div className={styles.blogsContainer}>
            <Heading subHeader="ARTICLE LIBRARY" header="Latest blog"/>
            <div className={styles.blogItemsContainer}>
                <div className={styles.blogsWrapper}>
                {
                    blogs.map(blog => {
                        return <Blog key={blog.id} blogTitle={blog.blogTitle} blogArthur={blog.blogArthur} blogImage={blog.blogImage} blogImageAlt={blog.blogImageAlt}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Blogs

