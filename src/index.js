import style from "./main.css"; //Since webpack bundles everything into the js file.

import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from './components/App'


ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById("app"));