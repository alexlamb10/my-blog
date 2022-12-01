import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Article from "./article";

export default () => (
    <StaticQuery 
    query={ graphql ` {
        allMarkdownRemark(sort:{fields: [frontmatter___date],order:DESC}){
          totalCount
          edges{
            node{
              fields {
                slug
              }
              id
              frontmatter{
                title
                image
                date(formatString: "MMMM YYYY")
                keywords
              }
              excerpt
            }
          }
        }
      }`
      

    }

    render = {data => (
        <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <Article 
                    to={node.fields.slug}
                    keywords={node.frontmatter.keywords}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.excerpt}
                />
            ))}
        </div>
    )}
    />
)