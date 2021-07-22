import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const Header = function() {
    return (
        <div>
            <h1>This is functional component</h1>
        </div>
    )
}

ReactDOM.render(<Header />, domElement);