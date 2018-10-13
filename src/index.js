import style from "./main.css"; //Since webpack bundles everything into the js file.
// import sum from './js/animate'

// console.log('Webpack Zero Config Works! -> Sum is: ' + sum(10));

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;

// console.log("Hello");

import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from './components/App'

// ReactDOM.render(
//     <HelloMessage name="Taylor" />,
//     mountNode
//   );

  ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById("app"));