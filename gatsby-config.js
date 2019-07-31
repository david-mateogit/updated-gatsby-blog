module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark'
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `David Mateo's Blog`,
    author: `David Mateo`,
    description: `Personal blog about development and other things...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Silenux`
      },
      {
        name: `github`,
        url: `https://github.com/david-mateogit`
      }
    ]
  }
};
