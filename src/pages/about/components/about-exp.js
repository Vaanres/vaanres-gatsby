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
                startDate(formatString: "MMMM YYYY")
                endDate(formatString: "MMMM YYYY")
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
        <div className="row mb-5" key={node.id}>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <img src="https://via.placeholder.com/150" />
            <div className="text-secondary">
              <small>
                {node.frontmatter.startDate}
                {node.frontmatter.endDate !== null &&
                  node.frontmatter.endDate !== 'Invalid date' && (
                    <span> – {node.frontmatter.endDate}</span>
                  )}
              </small>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutExp
