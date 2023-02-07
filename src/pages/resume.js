import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./resume.module.scss"
import resumePdf from "../images/resume.pdf"
import resumeInfo from "./resumeInfo"
import { a } from "../../.cache/dummy"

export default function About() {
  let resume = resumeInfo.map((element, index) => {
    let detailList = element.details.map((element, index) => {
      return <li>{element}</li>
    })
    return (
      <div>
        <h1 className={element.sectionTitle ? styles.title : styles.hide}>
          {element.sectionTitle}
        </h1>
        <div className={styles.company}>
          <h3 className={element.title ? styles.subtitle : styles.hide}>
            {element.title}&nbsp;{" "}
          </h3>
          <h3 className={element.location ? styles.city : styles.hide}>
            | {element.location}
          </h3>
        </div>
        <p className={element.jobTitle ? styles.position : styles.hide}>
          {element.jobTitle} | {element.startDate} - {element.endDate}
        </p>
        <p className={element.graduationDate ? styles.position : styles.hide}>
          {element.graduationDate}
        </p>
        <p className={element.project ? styles.project : styles.hide}>
          <u>{element.project}</u>
        </p>
        <ul className={styles.list}>
          {detailList}
          <li className={!element.projectLink ? styles.hide : ""}>
            <a href={element.projectLink}>{element.projectLinkTitle}</a>
          </li>
        </ul>
      </div>
    )
  })

  return (
    <Layout>
      <Title text="My Resume" />
      <a href={resumePdf} download>
        <button className={styles.resume}>Download Resume</button>
      </a>
      {resume}
    </Layout>
  )
}
