module.exports = {
  siteMetadata: {
    title: `Buy and Sell Software projects with bidzcart`,
    description: `Buy and Sell Software projects with bidzcart. Bidzcart is a marketplace for software developers, businessmen and investors to bid, sale and purchase projects.`,
    author: `@rahulvyas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-dark.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=4eabc7049497a543ccf2137f2&amp;id=7bbeb37286', // add your MC list endpoint here; see instructions below
      },
  },
  ],
}
