import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react')
console.log(typeof React);
console.log(typeof ReactDOM);
console.dir(React)

const domElement = document.getElementById("main");
const baseElement = <h3>Hello World From Webpack</h3>;

ReactDOM.render(baseElement, domElement);

// const isAdult = require("./utils.js");
// import { isSenior } from './isSenior.js';
// // const isSenior = require("./isSenior.js");

// console.log(isAdult(18));

// console.log(isSenior(18));


