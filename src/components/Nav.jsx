import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uuid from 'uuid/v1';

export default function Nav({ links }) {
  const anchors = links.map((link, index) => (
    <Fragment key={uuid()}>
      <Link to={link.to}>{link.text}</Link>
      {index !== links.length - 1 ? ' / ' : ''}
    </Fragment>
  ));
  return <nav>{anchors}</nav>;
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
