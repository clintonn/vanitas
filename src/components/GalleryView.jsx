import React from 'react';
import PropTypes from 'prop-types';
import style from './GalleryView.module.scss';
import ImagePanel from './ImagePanel';

export default function GalleryView({ panels }) {
  return (
    <section className={style.Gallery}>
      {panels.map(panel => (
        <ImagePanel {...panel} key={panel.path} />
      ))}
    </section>
  );
}

GalleryView.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
