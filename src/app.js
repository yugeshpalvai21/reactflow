import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const jsx = React.createElement('h2', {}, 'Hello World');

ReactDOM.render(jsx, domElement);