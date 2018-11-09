import React from 'react';
import PropTypes from 'prop-types';
import ImagePanel from './ImagePanel';

export default function ImageCollection({ images }) {
  const imageMaps = images.map(img => <ImagePanel key={img.id} />);
  return <>{imageMaps}</>;
}

ImageCollection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
