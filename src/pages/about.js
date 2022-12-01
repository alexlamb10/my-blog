import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default function About() {
    return <Layout>
        <Title text='About Me' />
        <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <p>Here is some more text for the page</p>
    </Layout>
}