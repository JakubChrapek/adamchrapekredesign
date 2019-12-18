module.exports = {
  siteMetadata: {
    title: `Adam Chrapek fotograf Łask`,
    description: `Bardzo dużo radości sprawia mi fotografowanie ludzi. Staram się uwiecznić każdą niepowtarzalną chwilę, uśmiech, gest, ciekawe spotkania i towarzyszącą im wyjątkową atmosferę. Zapraszam Cię do obejrzenia moich prac i poznania oferty. Mam nadzieję na sfotografowanie także Twoich, wyjątkowych chwil, do których będziesz wracać z przyjemnością.`,
    author: `@adam.chrapek`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
