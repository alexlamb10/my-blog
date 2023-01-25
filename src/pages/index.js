import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"
import picture from "../images/picture.jpg"
import * as styles from "./index.module.scss"

export default function Home() {
  return (
    <Layout>
      <Title text="About Me" />
      <div className={styles.mainArea}>
        <img className={styles.myPicture} src={picture} alt="" />
        <div>
          <h3>Hey!</h3>
          <p>
            I'm Alex Lamb, and I am a web developer. I began my professional
            career in August 2022 after completing the Web Development Bootcamp
            at Devmountain. I currently work for Justice Works, LLC in Utah.
            Check out my{" "}
            <a href="https://docs.google.com/document/d/1IiF6Q_a5vM_LlL9JoqWg59RAJ3BEYVPpJFqq4pBR5XM/edit">
              resume!
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
