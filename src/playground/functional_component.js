import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const jsx = (
    <div>
        <h1>Hello World</h1>
        <p>This Para Transpiled from JSX</p>
        <p>Addition of 3,5 is { 3 + 5 }</p>
        { true && <p>This para Generated if jsx expression returns true</p>}
        {[<li>one</li>, <li>two</li>, <li>three</li>]}
        {[1, 'one', true]}
    </div>
);

ReactDOM.render(jsx, domElement);