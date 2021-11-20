// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // ref: https://gridsome.org/docs/pages-api/
  api.createManagedPages(async ({ removePageByPath, graphql }) => {
    const { data } = await graphql(`{
      allProject (filter: { published: { eq: true } }) {
        edges {
          node {
            blog_published
            slug
          }
        }
      }
    }`);

    data.allProject.edges.forEach(({ node }) => {
      if (!node.blog_published) {
        removePageByPath(`/projects/${node.slug}`)
      }
    });
  })
}
