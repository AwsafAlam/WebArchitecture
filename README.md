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

Webpack is a module bundler for JavaScript applications. Bundles all the code together, so that we can write our code in ES6/ latest javascript. It also compiles and minifies css to make the site more efficient. **Gulp and Grunt are task runners, but Webpack is more advanced. It intelligently bundles.**. Webpack takes the input file and follows the source to build a dependency graph.

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

### Babel & HTML webpack plugin

- `npm i @babel/core babel-loader @babel/preset-env --save-dev`
- `npm i html-webpack-plugin html-loader --save-dev`
  
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

## Extracting CSS to a file

We must install some loader. Loaders are different from plugins. Plugins modify your bundling process, whereas a loader tells webpack how to load a file of a specific type.

- `npm i mini-css-extract-plugin style-loader css-loader --save-dev`

For using loaders, we need to use rules in the config.js file. Webpack bundles all of our CSS code into the index.js fileSo, we need to add an import for that at the start of `index.js` specify `import style from "./main.css";`

---

## Bundling Images (URLs within CSS)

We need to install file loader and url loader to bundle images.

- `npm i file-loader url-loader --save-dev`

---