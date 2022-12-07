import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import picture from "../images/picture.jpg"
import * as styles from "./about.module.scss"

export default function About() {
  return (
    <Layout>
      <Title text="About Me" />
      <div className={styles.mainArea}>
        <img src={picture} alt="" />
        <div className="aboutMe">
            <h3>Hey!</h3>
            <p>
              I'm Alex Lamb, and I am a web developer. I began my professional
              career in August 2022 after completing the Web Development Bootcamp at
              Devmountain.
            </p>
        </div>
      </div>
    </Layout>
  )
}
