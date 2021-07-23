import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

class UnChecked extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Header Component</div>
                <div>ToDos Component</div>
                <div>Form Component</div>
            </div>
        )
    }
}

ReactDOM.render(<UnChecked />, domElement);