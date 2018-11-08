import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import Nav from './Nav';
import Header from './Header';
import links from '../constants/links';

export default function PageLayout({ children }) {
  return (
    <main>
      <Header title="Inventory" />
      <Nav links={links} />
      {children}
    </main>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
