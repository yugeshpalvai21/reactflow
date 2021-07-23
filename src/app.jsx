import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reSet = this.reSet.bind(this);                                                      
    }

    addOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    reSet() {
        this.setState(() => {
            return {
                counter: 0
            }
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Count: { this.state.counter }</h1>
                <button onClick={this.addOne}>Add One(+1)</button>
                <button onClick={this.minusOne}>Minus One(-1)</button>
                <button onClick={this.reSet}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, domElement);