import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { siteMetadata } from "../../gatsby-config"
import * as styles from "./header.module.scss"
import title from "./title"

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

const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = "https://twitter.com/" + props.username
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/in/" + props.username
  } else if (props.site === "github") {
    style = styles.buttonGithub
    url = "https://www.github.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

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
        <div className={styles.row}>
          <HeaderLink to="/" text="ALEX LAMB" />
          <HeaderLink to="/about" text="RESUME" />
          {/* <HeaderLink to="/blog-posts" text="BLOG" /> */}
          <HeaderLink to="/contact" text="CONTACT" />
        </div>
      </header>
    )}
  />
)
