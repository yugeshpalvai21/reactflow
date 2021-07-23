import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };                                                      
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.counter }</h1>
                <button>Add One(+1)</button>
                <button>Minus One(-1)</button>
                <button>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, domElement);