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
      <div className="jumbotron">
        <div className="container">
          <p>
            <h1 className="heading-1 text-primary">Boise JS</h1>
          </p>
          <br />
          <p>
            <h3 className="title-3">
              Hey there!{" "}
              <small className="text-muted">
                {" "}
                We're bringing JavaScript developers from across the Treasure
                Valley together to create a united and self-enriching community
                for networking, exploration, and continued education.
              </small>
            </h3>
          </p>
          <h3 className="title-3">
            Developers just like YOU!{" "}
            <small className="text-muted">
              JavaScript enthusiasts of all skill levels are welcome: curious
              newcomers, high school hackers, after hours hobbyists, and
              professionals from across the industry will find relevant content.
              Events take the form of a monthly two-hour social event split
              between networking/socialising and two educational presentations
              (20 minute talks with 10 minutes of Q&A).
            </small>
          </h3>
        </div>
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
