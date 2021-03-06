import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Header({ title }) {
  return (
    <header>
      <Link to="/">{title}</Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
