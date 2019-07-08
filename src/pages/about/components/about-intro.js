import React from 'react'

import { useStaticQuery, Link, graphql } from 'gatsby'

const AboutIntro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "about-intro" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `
  )

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <hr />
        </div>
      ))}
    </>
  )
}

export default AboutIntro
