module.exports = {
  siteMetadata: {
    title: `Van Nguyen - Product Designer`,
    description: `Van Nguyen Portfolio`,
    author: `Van Nguyen`,
    email: `vaanres@gmail.com`,
    socials: {
      twitter: `https://twitter.com/Vaanres`,
      facebook: `https://www.facebook.com/vaanres`,
      linkedin: `https://www.linkedin.com/in/nguyen-le-van/`,
      behace: `https://www.behance.net/Vaanres`,
      dribble: `https://dribbble.com/Vaanres`,
    },
  },
  plugins: [
    //'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Van Nguyen - Product Designer`,
        short_name: `Van Nguyen`,
        description: 'Van Nguyen Portfolio',
        homepage_url: 'http://vannguyen-uxui.firebaseapp.com',
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Montserrat:300,400,500,600,700&display=swap&subset=vietnamese',
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
