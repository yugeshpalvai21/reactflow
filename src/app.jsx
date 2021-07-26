import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const Header = (props) => (
    <div>
        <h1>UnChecked App</h1>
        <p>Manage Dails Updates</p>
    </div>
)
class UnChecked extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <div>ToDos Component</div>
                <div>Form Component</div>
            </div>
        )
    }
}

ReactDOM.render(<UnChecked />, domElement);