import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default function Home() {
    return <Layout>
        <Title text='Welcome' />
        <p>Here is some more text for the page</p>

        <ArticleList />
    </Layout>
}