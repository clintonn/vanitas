import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import GalleryView from '../components/GalleryView';

export default ({ data }) => {
  console.log(data);
  return (
    <PageLayout>
      <GalleryView panels={data.allMarkdownRemark.edges.map(e => e.node.frontmatter)} />
    </PageLayout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 24) {
      edges {
        node {
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;
