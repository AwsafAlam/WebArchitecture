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

### Babel

---

## Webpack

Webpack is a module bundler for JavaScript applications. Bundles all the code together, so that we can write our code in ES6/ latest javascript. It also compiles and minifies css to make the site more efficient.

To Define a Project from scratch, we must first install Node js

- `npm init` Initializes `package.json`
- `npm init -y` also initializes package.json, but sets all the values to default for a quick setup
- Next, install webpack and webpack-cli `npm -i --save-dev webpack webpack-cli` this specifies that webpack will only be used for the development build
- By default, webpack will start from the `./src/index.js`, so that need to be created.
- Now, modify `package.json` , and add the scripts
- `"build": "webpack --mode production"` for `npm run build`. This minifies the js code into `./dist/main.js` file
- `"dev": "webpack --mode development"` for `npm run dev`. This does not minify the js code into `./dist/main.js` file
- Now, we have a basic build system that can be used to transpile advanced js code into simplified code compatible in browsers.

### Adding other build systems to webpack

---
