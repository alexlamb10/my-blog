import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./about.module.scss"
import resumePdf from "../images/resume.pdf"

export default function About() {
  return (
    <Layout>
      <Title text="My Resume" />
      <a href={resumePdf} download>
        <button className={styles.resume}>Download Resume</button>
      </a>
    </Layout>
  )
}
