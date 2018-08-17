import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./containers/calculator";

import "./styles.css";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
