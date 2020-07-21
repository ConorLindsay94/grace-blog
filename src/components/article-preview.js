/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { articlePreviewStyles } from "../styles/article-preview";

export default ({ article }) => (
  <li css={articlePreviewStyles.article}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <h3>
        <span to={`/blog/${article.slug}`}>{article.title}</span>
      </h3>
    </Link>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </li>
);
