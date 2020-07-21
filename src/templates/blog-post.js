/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import calendarIcon from "../assets/svg/calendar.svg";
import bookIcon from "../assets/svg/book-open.svg";

import heroStyles from "../components/hero.module.css";
import { blogStyles } from "../styles/blog";
import { globalStyles } from "../styles/global";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div style={{ background: "#fff" }}>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div css={blogStyles.container}>
            <div css={blogStyles.innerContainer}>
              <div css={blogStyles.articleHeader}>
                <h1 className="section-headline">{post.title}</h1>
                <p css={blogStyles.meta}>
                  <svg css={globalStyles.icon}>
                    <use xlinkHref={`#${calendarIcon.id}`} />
                  </svg>
                  {post.publishDate}
                </p>
                <p css={blogStyles.meta}>
                  <svg css={globalStyles.icon}>
                    <use xlinkHref={`#${bookIcon.id}`} />
                  </svg>
                  {post.articleLength} minute read
                </p>
              </div>
              <div
                css={blogStyles.body}
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      articleLength
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
