import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

export default function Layout({ children }) {
  return <main>{children}</main>;
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
