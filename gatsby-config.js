module.exports = {
  siteMetadata: {
    title: 'Leven met God',
    editBaseUrl: 'https://github.com/marcinczenko/leven-met-god/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: true,
        ignore: []
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss'
  ]
}
