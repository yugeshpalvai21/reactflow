import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const Header = (props) => (
        <div>
            <h1>This is functional component</h1>
            <p>Name: { props.name }</p>
        </div>
    )

ReactDOM.render(<Header name="yugesh" />, domElement);