import { graphql } from "gatsby";
import React from "react";
import get from "lodash/get";

import Post from "templates/post";
import Meta from "components/meta";
import Layout from "components/layout";

const EventsIndex = ({ data, location }) => {
  const events = get(data, "remark.events");
  return (
    <Layout location={location}>
      <Meta site={get(data, "site.meta")} />
      <div className="container">
        <h1 className="heading-1">UNDER CONSTRUCTION</h1>
      </div>
      {events.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true
          }}
          key={i}
        />
      ))}
    </Layout>
  );
};

export default EventsIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        github
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      events: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
