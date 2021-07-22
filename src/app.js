import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const jsx = (
    <div>
        <h1>Hello World</h1>
        <p>This Para Transpiled from JSX</p>
    </div>
);

ReactDOM.render(jsx, domElement);