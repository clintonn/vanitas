import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import style from './ImagePanel.module.scss';

export default function ImagePanel({
  product, path, name, img,
}) {
  return (
    <div className={style.ImagePanel}>
      <Link to="/about">
        <figure className={style.Figure}>
          <img src="http://placekitten.com/220/340" alt={product} />
          <figcaption>{name}</figcaption>
          HECK
        </figure>
      </Link>
    </div>
  );
}

ImagePanel.propTypes = {
  product: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
