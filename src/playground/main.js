import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
// const React = require('react')
console.log(typeof React);
console.log(typeof ReactDOM);
console.dir(React)

const domElement = document.getElementById("main");
const baseElement = (
    <div>
        <h2>Hello From Webpack</h2>
        <p>dom generated using ReactDOM</p>
    </div>
);

ReactDOM.render(baseElement, domElement);

// const isAdult = require("./utils.js");
// import { isSenior } from './isSenior.js';
// // const isSenior = require("./isSenior.js");

// console.log(isAdult(18));

// console.log(isSenior(18));