import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import links from '../constants/links';

export default function PageLayout({ children }) {
  return (
    <>
      <main>
        <Header title="Inventory" />
        <Nav links={links} />
        {children}
      </main>
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
