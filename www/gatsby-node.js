const each = require("lodash/each");
const path = require("path");
const PostTemplate = path.resolve("./src/templates/index.js");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        // Create blog events & pages.
        const items = data.allFile.edges;
        const events = items.filter(({ node }) => /events/.test(node.name));
        each(events, ({ node }) => {
          if (!node.remark) return;
          const { path } = node.remark.frontmatter;
          createPage({
            path,
            component: PostTemplate
          });
        });

        const pages = items.filter(({ node }) => /page/.test(node.name));
        each(pages, ({ node }) => {
          if (!node.remark) return;
          const { name } = path.parse(node.path);
          const PageTemplate = path.resolve(node.path);
          createPage({
            path: name,
            component: PageTemplate
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        templates: path.resolve(__dirname, "src/templates"),
        scss: path.resolve(__dirname, "src/scss")
      }
    }
  });
};
