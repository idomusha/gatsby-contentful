<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  idomusha's portfolio
</h1>

Project started from the hello-world boilerplate: this starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_You also may want to check out the vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 📦 What was added?

1.  **[gatsby-plugin-playground](https://www.gatsbyjs.org/packages/gatsby-plugin-playground/)**: A gatsby plugin to use Prisma Playground

    Adds the Prisma playground to your gatsby dev server. This is running in parallel to GraphiQl. What you will get is the Playground on the route `/___playground`, which you can use to query your data and test them out.

2.  **[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)**: Gatsby plugin which parses files within a directory for further parsing by other plugins ()

    A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.

3.  **[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)**: Lazy-loading React image component with optional support for the blur-up effect

    Speedy, optimized images without the work.
gatsby-image is a React component specially designed to work seamlessly with Gatsby’s GraphQL queries. It combines Gatsby’s native image processing capabilities with advanced image loading techniques to easily and completely optimize image loading for your sites. gatsby-image uses gatsby-plugin-sharp to power its image transformations.

4.  **[gatsby-background-image](https://www.gatsbyjs.org/packages/gatsby-background-image/)**: Lazy-loading React background-image component with optional support for the blur-up effect

    It has all the advantages of gatsby-image, including the “blur-up” technique or a ”traced placeholder” SVG to show a preview of the image while it loads,
plus being usable as a container (no more hacks with extra wrappers),
plus being able to work with multiple stacked background images.

5. **[gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)**: Gatsby plugin to handle scss/sass files

6. **[gatsby-plugin-react-css-modules](https://www.gatsbyjs.org/packages/gatsby-background-image/)**: Gatsby plugin that transforms styleName to className using compile time CSS module resolution

7. **[gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)**: Gatsby plugin to add support for styled components

8. **[gatsby-plugin-transition-link](https://www.gatsbyjs.org/packages/gatsby-plugin-transition-link/)**: A link component for page transitions in gatsby ([Gatsby Plugin Transition Link documentation](https://transitionlink.tylerbarnes.ca/))

9. **[gatsby-source-contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)**: Gatsby source plugin for building websites using the [Contentful CMS](https://www.contentful.com/) as a data source





## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

- **Where do you start with GraphQL?** Attend the free and open-source tutorial to learn all around GraphQL to go from zero to production: **[howtographql.com](https://www.howtographql.com/)**

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)
