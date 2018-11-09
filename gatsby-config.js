module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts/`,
        name: 'markdown-pages',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
  siteMetadata: {
    title: 'Inventory',
    siteUrl: 'https://inventory.clinton.sh',
    description: 'Personal manifest',
  },
};
