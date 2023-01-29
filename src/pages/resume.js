import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./resume.module.scss"
import resumePdf from "../images/resume.pdf"

export default function About() {
  return (
    <Layout>
      <Title text="My Resume" />
      <a href={resumePdf} download>
        <button className={styles.resume}>Download Resume</button>
      </a>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>Devmountain&nbsp; </h3>
        <h3 className={styles.city}>| Lehi, UT</h3>
      </div>
      <h1 className={styles.title}>Professional Experience</h1>
      <h1 className={styles.title}>Skills</h1>
      <h1 className={styles.title}>Service/Leadership</h1>
    </Layout>
  )
}
