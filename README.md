# WebArchitecture

---

## SASS

Installing SASS

- First install ruby `sudo apt install ruby-full`
- Install sass compiler using `sudo gem install sass`
- For compilation using terminal, go to the directory type `sass --watch style.sass:style.css`

This will compile sass everytime you hit save

### Scalable Modular Architecture for CSS

This book [smacss](https://smacss.com/) is helpful for designing modular css architectures for large applications.

**Project structure:**
css styles are organised in a modular layout:

- plugins
- base (Element selectors , Base elements)
- modules (More discrete components of the page, standalone e.g widgets pop ups etc)
- layouts (Major and minor styles based of use, e.g headers footers etc)

---

### Bourbon and Neat

---

## Webpack

Webpack is a module bundler for JavaScript applications. Bundles all the code together, so that we can write our code in ES6/ latest javascript. It also compiles and minifies css to make the site more ***efficient***. **Gulp and Grunt are task runners, but Webpack is more advanced. It intelligently bundles.**. Webpack takes the input file and follows the source to build a dependency graph.

To Define a Project from scratch, we must first install Node js

- `npm init` Initializes `package.json`
- `npm init -y` also initializes package.json, but sets all the values to default for a quick setup
- Next, install webpack and webpack-cli `npm -i --save-dev webpack webpack-cli` this specifies that webpack will only be used for the development build
- By default, webpack will start from the `./src/index.js`, so that need to be created.
- Now, modify `package.json` , and add the scripts
- `"build": "webpack --mode production"` for `npm run build`. This minifies the js code into `./dist/main.js` file
- `"dev": "webpack --mode development"` for `npm run dev`. This does not minify the js code into `./dist/main.js` file
- Now, we have a basic build system that can be used to transpile advanced js code into simplified code compatible in browsers.

Webpack 4 does not need any config. It will look in `./src/index.js` as the default entry point. Moreover, it will spit out the bundle in `./dist/main.js`.

Production mode enables all sorts of optimizations out of the box. Including minification, scope hoisting, tree-shaking and more.

Development mode on the other hand is optimized for speed and does nothing more than providing an un-minified bundle.

Further Reference  [Webpack 4](https://www.valentinog.com/blog/webpack-tutorial/)
[Medium Blog](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-webpack-4-e528a6b3fc16)

### Overriding default entry point

```json
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```

---

## Using configuration file

Having 2 configuration files is a common pattern in webpack.

A typical project may have:

- a configuration file for development, for defining webpack dev server and other stuff
- a configuration file for production, for defining UglifyJSPlugin, sourcemaps and so on

We can use the configuration file `webpack.config.js` to specify all the build dependencies.

```js
var webpack = require('webpack');

module.exports = {
    //webpack config goes here
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: './dist'
    }
}
```

We will now use a config file to setup babel-loader to transpile our ES6+ code and html-webpack-plugin to simplify serving our webpack output bundle as a script tag on our HTML file. So, we fetch new dependencies.

---

### HTML webpack plugin

- Install `npm i html-webpack-plugin html-loader --save-dev`
  
Now, for HTML plugin update the config file. Delete the script tags in the HTML file, as they will be injected by webpack.

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

```

---

### Bable

Modern Javascript is mostly written in ES6.
But not every browser know how to deal with ES6. We need some kind of transformation.

This transformation step is called transpiling. Transpiling is the act of taking ES6 and making it understandable by older browsers.

Webpack doesn’t know how to make the transformation but has loaders: think of them as of transformers.

babel-loader is the webpack loader for transpiling ES6 and above, down to ES5.

To start using the loader we need to install a bunch of dependencies.

- Install `npm i @babel/core babel-loader @babel/preset-env --save-dev`

Next up configure Babel by creating a new file named .babelrc inside the project folder:

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

At this point we have 2 options for configuring babel-loader:

- using a configuration file for webpack
- using `--module-bind` in your npm scripts

For using loaders in webpack 4 you still have to create a configuration file.

```json
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

Without this config, ES6 code will not be exacuted by the browser.
Here is no need to specify the entry point unless you want to customize it.

The second option is using it in command line

```json
"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }
```

---

## Extracting CSS to a file

We must install some loader. Loaders are different from plugins. Plugins modify your bundling process, whereas a loader tells webpack how to load a file of a specific type.

- `npm i mini-css-extract-plugin style-loader css-loader --save-dev`

For using loaders, we need to use rules in the config.js file. Webpack bundles all of our CSS code into the index.js fileSo, we need to add an import for that at the start of `index.js` specify `import style from "./main.css";`

By default webpack uses hash to extraxt file, but we can specify the names if we want. mini-css-extract-plugin will extract the css from the index,js and put thenm in a seperate folder.

---

## Bundling Images (URLs within CSS)

We need to install file loader and url loader to bundle images.

- `npm i file-loader url-loader --save-dev`

Then we need to modify the config file

```json
module.exports = {
    module: {
        rules: [
        {
            test: /\.(jpg|png|gif)$/,
            use: ["url-loader" ]
        }]
    }
}
```

This process loads images from the CSS file
**To load images from the HTML file, use HTML loader** without this, images will not load. Do not need to install anything further.

```json
{
        test: /\.html$/,
        use: [
            {
            loader: "html-loader",
            options: { minimize: true }
            }
        ]
        }
```

---

## Webpack Dev Sever

Running `npm run dev` whenever you make changes to your code

First install `npm i webpack-dev-server --save-dev`

Once configured webpack dev server will launch your application inside a browser.It will automagically refresh the browser’s window as well, every time you change a file.

Change the `package.json`

```json
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
```

May or maynot configure the serve in config.js

```json
devServer: {
    contentBase: 'dist',
    port: 9000,
    watchContentBase: true
}
```

Run by typing `npm run start` in the console. This does not physically build the file. Need to run `npm run build` to get the final production build.

---

## Adding Source Maps

To help debugging the project, we need to enable dev tool, to know exactly where a bug is located. Could slow down build time. [Further Documentation](https://webpack.js.org/configuration/devtool/)

This also specifies the line numbersin the code

---

### Minifying code

We use Uglify plugin to minify the code. Webpack 4 automatically does this if we run `npm run build`

---

## Using Sass

First we install the sass loader `npm install sass-loader node-sass css-loader --save-dev`
We can also now install `style-loader`. This injects the css into the start of the page.

Another option is to use the `mini-css-extract-plugin` this extracts the css into separate files which we can include. so that the css does not depend on the js being loaded.So, if for some reason javascript does not load, the page will have no styling to it.

Now, modify the config file

```json
module: {
  rules: [{
      test: /\.(scss|sass)$/,
      use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
  }]
}
```

This will convert any sass/scss to css and inject to the DOM immediately.

---

To build ta file completely from scratch everytime, we use clean webpack plugin. So, we remove the dist folder completely before building a file.

- Install using `npm install --save-dev clean-webpack-plugin`

Modify the config file

```json
plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new CleanWebpackPlugin(['dist'])  //Array of folders to be removed
}
```

---

## React

---

That’s easy once you’ve installed and configured babel. We must always use babel with react since it uses ES6 syntax and also JSX.

Install React with:

- `npm i react react-dom --save-dev`
  
Next up add babel-preset-react:

- `npm i @babel/preset-react --save-dev`
  
Configure the preset in .babelrc:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Now, create a folder named components, and add react code to index.js. Add other codes to App.js inside components. Things should compile successfully!

---

## Using SVG with React webpack

- `npm install svg-inline-loader --save-dev`

---

### React Markdown

Converts Markdown into React

---

## Working with multiple HTML files

We can simply use a plugin multiple times . e.g

```json
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/users.html",
      filename: "./users.html"
      chunks: []
    })

  ]
};

```

But this can only be used for specipic no. of files (static websites). Only specific chunks are added. Another option is using file-loader

```js
{
  test: /\.html$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
  ],
  exclude: path.resolve(__dirname, './src/index.html)
}
```

This way we can add all the html pages. we need to first include `./users.html` inside index.js

---

## Using third party packages such as jquery and bootstrap

using npm we can install all of these. Since Jquery is a production dependency, and not a development dependency, we use `npm install --save jquery`

Now, we need to import it into the js file. otherwise, this will not be used by webpack when compiling. `import 'jquery';` in the index.js. Since it is a package by npm, we do not need to specify any ralative path.

we need to add webpack plugin to the configure.js file

```js
plugins: [
  new webpack.ProvidePlugin({
    // Map variables/ functions/ objects to functions from other packages(JQuery)
    $: 'jquery',
    jQuery: 'jquery'
  })
]
```

So, webpack compiles these codes only instead to importing the entire jquery library.

---

### Code Splitting

Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

There are three general approaches to code splitting available:

- Entry Points: Manually split code using entry configuration.
- Prevent Duplication: Use the SplitChunksPlugin to dedupe and split chunks.
- Dynamic Imports: Split code via inline function calls within modules.

Manually spliting code:

```js
entry: {
  index: './src/index.js',
  another: './src/another-module.js'
}
```

As mentioned there are some pitfalls to this approach:

- If there are any duplicated modules between entry chunks they will be included in both bundles.
- It isn't as flexible and can't be used to dynamically split code with the core application logic.

**To prevent duplication:** The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk.

```js
optimization: {
    splitChunks: {
      chunks: 'all'
  }
}
```

Here are some other useful plugins and loaders provided by the community for splitting code:

- mini-css-extract-plugin: Useful for splitting CSS out from the main application.
- bundle-loader: Used to split code and lazy load the resulting bundles.
- promise-loader: Similar to the bundle-loader but uses promises.

Some of them use async await to optimize code.

Using dynamic imports such as:

```js
return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
+     var element = document.createElement('div');
+
+     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+
+     return element;
+
+   }).catch(error => 'An error occurred while loading the component');
```

webpack does all the optimizations for us.