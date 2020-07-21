/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";
import { Helmet } from "react-helmet";

import heroStyles from "../components/hero.module.css";
import Layout from "../components/layout";
import calendarIcon from "../assets/svg/calendar.svg";
import bookIcon from "../assets/svg/book-open.svg";
import { blogListStyles as styles } from "../styles/blog";
import { globalStyles } from "../styles/global";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const blogHero = get(this, "props.data.contentfulAsset");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className={heroStyles.hero}>
            <h1 className={heroStyles.heroHeadline}>
              <span className={heroStyles.heroHeadlineText}>Blog</span>
            </h1>
            <Img
              className={heroStyles.heroImage}
              alt={blogHero.title}
              fluid={blogHero.fluid}
            />
          </div>
          <div css={styles.container}>
            {posts.map(({ node }) => (
              <article css={styles.blogPost}>
                <Link to={`/blog/${node.slug}`}>
                  <h2>{node.title}</h2>
                </Link>
                <div>
                  <small css={styles.meta}>
                    <svg css={globalStyles.icon}>
                      <use xlinkHref={`#${calendarIcon.id}`} />
                    </svg>
                    {node.publishDate}
                  </small>
                  <small css={styles.meta}>
                    <svg css={globalStyles.icon}>
                      <use xlinkHref={`#${bookIcon.id}`} />
                    </svg>
                    {node.articleLength} minute read
                  </small>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.description.childMarkdownRemark.html,
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          articleLength
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulAsset(title: { eq: "Blog hero" }) {
      id
      title
      fluid(maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`;
