module.exports = {
  siteMetadata: {
    title: 'Confluenza Solo',
    editBaseUrl: 'https://github.com/confluenza/solo-template/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: true
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import'
  ]
}
