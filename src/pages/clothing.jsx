import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import GalleryView from '../components/GalleryView';

export default function Clothing({ data }) {
  const products = data.allMarkdownRemark.edges;
  const panels = products.map(edge => edge.node.frontmatter);
  return (
    <PageLayout>
      <GalleryView panels={panels} />
    </PageLayout>
  );
}

export const query = graphql`
  query ClothingQuery {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "ephemera" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...ImagePanelData
        }
      }
    }
  }
`;
