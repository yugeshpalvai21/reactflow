import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: 'IND'};
    }

    render() {
        return (
            <div>
                <h1>Name: { this.props.name }</h1>
                <p>Location: { this.state.location }</p>
            </div>
        )
    }
}

ReactDOM.render(<Header name="yugesh" />, domElement);