import React from 'react';
import PropTypes from 'prop-types';

export default function ItemTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <p>{frontmatter}</p>
      <p>{html}</p>
    </div>
  );
}

// TODO: Shape this boy
ItemTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};
