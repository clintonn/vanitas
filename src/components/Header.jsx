import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <header>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </header>
      )}
    />
  );
}
