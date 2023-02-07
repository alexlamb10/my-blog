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
        <p className={element.project ? styles.project : styles.hide}>
          <u>{element.project}</u>
        </p>
        {/* <ul className={styles.list}>
          <li>16-week immersive Web Development Program.</li>
        </ul> */}
      </div>
    )
  })

  return (
    <Layout>
      <Title text="My Resume" />
      <a href={resumePdf} download>
        <button className={styles.resume}>Download Resume</button>
      </a>
      {/* <h1 className={styles.title}>Education</h1>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>Devmountain&nbsp; </h3>
        <h3 className={styles.city}>| Lehi, UT</h3>
      </div>
      <ul className={styles.list}>
        <li>16-week immersive Web Development Program.</li>
      </ul>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>Weber State University&nbsp; </h3>
        <h3 className={styles.city}>| Ogden, UT</h3>
      </div>
      <ul className={styles.list}>
        <li>Associates Degree - General Studies.</li>
        <li>
          Earned High Honor Roll during each semester at Weber State University.
        </li>
      </ul>
      <h1 className={styles.title}>Professional Experience</h1>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>Justice Works, LLC&nbsp; </h3>
        <h3 className={styles.city}>| Centerville, UT</h3>
      </div>
      <p className={styles.position}>Web Developer I | Aug 2022 - Current</p>
      <ul className={styles.list}>
        <li>
          Showed the ability to learn and apply new skills to efficiently
          complete tickets assigned to me.
        </li>
        <li>
          Used HTML, CSS, and Javascript to build functional components for the
          customer to use on a daily basis.
        </li>
        <li>
          Utilized problem-solving skills to produce creative solutions to tasks
          given to me.
        </li>
      </ul>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>
          Devmountain Student Developers&nbsp;{" "}
        </h3>
        <h3 className={styles.city}>| Centerville, UT</h3>
      </div>
      <p className={styles.position}>
        Web Developer / Software Engineer (student) | Feb 2022 - May 2022
      </p>
      <p className={styles.project}>
        <u>Personal Project - Sell Monkey</u>
      </p>
      <ul className={styles.list}>
        <li>
          Utilized ReactJS to develop an application allowing users to buy and
          sell used items.
        </li>
        <li>
          Protected user data with Auth0 for a secure way to log in to the
          application.
        </li>
        <li>
          Used Stripe to allow users to purchase items with debit or credit
          cards securely.
        </li>
        <li>
          <a href="https://github.com/alexlamb10/sell-monkey">
            Sell Monkey Repo.
          </a>
        </li>
      </ul>
      <p className={styles.project}>
        <u>Personal Project - Trip Planner</u>
      </p>
      <ul className={styles.list}>
        <li>
          Developed an application using Vanilla JS enabling users to keep track
          of desired vacation cities.
        </li>
        <li>
          Provided authentication and user credentials using Bcrypt to ensure
          each user’s profile security.
        </li>
        <li>
          Used AWS S3 allowing users to upload pictures to the database upon
          completing a pre-saved trip.
        </li>
        <li>
          <a href="https://github.com/alexlamb10/devmountain-capstone-1">
            Trip Planner Repo.
          </a>
        </li>
      </ul>
      <div className={styles.company}>
        <h3 className={styles.subtitle}>America First Credit Union&nbsp; </h3>
        <h3 className={styles.city}>| Ogden, UT</h3>
      </div>
      <p className={styles.position}>
        Member Service Representative | Dec 2020 - Feb 2022
      </p>
      <ul className={styles.list}>
        <li>
          Identified solutions for clients using active listening and company
          resources to improve company customer ratings.
        </li>
        <li>
          Informed clients of the company of resources available to them to
          enhance their personal banking, which saved the company and client
          time.
        </li>
        <li>
          Implemented new techniques to improve how I communicated with clients
          through training provided by the company in order to give each client
          a better experience.
        </li>
        <li>
          Worked on a team in which I strived to be uplifting to each of my
          coworkers in order for them to feel comfortable in the work
          environment each day.
        </li>
      </ul>
      <h1 className={styles.title}>Skills</h1>
      <h1 className={styles.title}>Service/Leadership</h1> */}

      {resume}
    </Layout>
  )
}
