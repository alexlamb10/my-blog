import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./contact.module.scss"

export default function Contact() {
  return (
    <Layout>
      <Title text="Contact" />
      <form
        className={styles.page}
        method="post"
        action="https://formsubmit.co/0954104084e728e515851decdb5f0142"
      >
        <div className={styles.fields}>
          <div className={styles.field}>
            <div className={styles.half}>
              <p>
                If you would like to contact me, feel free to fill out the form
                below. You can also reach out to me through{" "}
                <a
                  href="https://twitter.com/alexlambdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{" "}
                or{" "}
                <a
                  href="https://linkedin.com/in/alexlambdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                . I'll get back to you as soon as I can.
              </p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.half}>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.half}>
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.messages}>
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <div className={styles.field}>
            <ul className={styles.actions}>
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className={styles.primary}
                />
              </li>
              <li>
                <input className={styles.reset} type="reset" value="Reset" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </Layout>
  )
}
