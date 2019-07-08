import React from 'react'
import { graphql } from 'gatsby'
// import { css } from '@emotion/core'
// import { rhythm } from '../utils/typography'

export default ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
        </h3>

        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    ))}
  </div>
)
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
          rawMarkdownBody
        }
      }
    }
  }
`
