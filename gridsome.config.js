// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Joe Winger',
  siteUrl: 'https://joewinger.com/',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './content', // Where .md files are located
        template: './src/templates/Project.vue',
        route: '/projects/:slug' 
      }
    }
  ]
}
