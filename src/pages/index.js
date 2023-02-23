import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"
import picture from "../images/picture.jpg"
import * as styles from "./index.module.scss"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <Title text="About Me" />
      <div className={styles.mainArea}>
        <img className={styles.myPicture} src={picture} alt="" />
        <div>
          <h3>Hey!</h3>
          <p>
            I'm Alex! I'm a junior web developer from Ogden, UT. After receiving
            my Associates at Weber State University, I jumped right into web
            development at Devmountain, taking the Web Development course, which
            I completed in May of 2022. When I'm not working, I enjoy spending
            my down time with family–camping, hiking, traveling, and watching
            sports. And of course, finding time to code something new. Check out
            my <Link to="/resume">resume!</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
