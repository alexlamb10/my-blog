import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { siteMetadata } from "../../gatsby-config"
import * as styles from "./header.module.scss"

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <div className={styles.home}>
          <HeaderLink to="/" text="ALEX LAMB" />
        </div>
        <div className={styles.other}>
          <HeaderLink to="/about" text="RESUME" />
          <HeaderLink to="/blog-posts" text="BLOG" />
          <HeaderLink to="/contact" text="CONTACT" />
        </div>
      </header>
    )}
  />
)
