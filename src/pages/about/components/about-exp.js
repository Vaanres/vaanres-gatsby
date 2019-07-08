import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const AboutExp = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "about-exp" } } }
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                startDate
                endDate
                company
                image
              }
              html
            }
          }
        }
      }
    `
  )

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="row" key={node.id}>
          <div className="col-12">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div className="col-12">
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutExp
