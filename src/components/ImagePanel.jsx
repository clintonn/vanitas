import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import style from './ImagePanel.module.scss';

export default function ImagePanel({ path, title, image }) {
  return (
    <div className={style.ImagePanel}>
      <Link to={path}>
        <figure className={style.Figure}>
          <img src={image} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export const query = graphql`
  fragment ImagePanelData on MarkdownRemark {
    frontmatter {
      title
      image
      path
    }
  }
`;

ImagePanel.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
