const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Transferrum",
    author: "Ing. Michaela Risko",
    description: "Simple web page for Transferrum Stara Lubovna"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp', 
    'gatsby-plugin-sharp'
  ],
}
