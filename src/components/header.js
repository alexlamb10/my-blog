import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import { siteMetadata } from "../../gatsby-config"
import * as styles from "./header.module.scss"
import { Bars3Icon } from "@heroicons/react/20/solid"

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
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" id={styles.icon}>
          <hr />
          <hr />
          <hr />
        </label>
        <ul className={styles.other}>
          <li className={styles.active}>
            <HeaderLink to="/" text="HOME" />
          </li>
          <li>
            <HeaderLink to="/about" text="RESUME" />
          </li>
          <li>
            <HeaderLink to="/blog-posts" text="BLOG" />
          </li>
          <li>
            <HeaderLink to="/contact" text="CONTACT" />
          </li>
        </ul>
      </header>
    )}
  />
)
