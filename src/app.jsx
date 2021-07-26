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

const Item = (props) => (
    <li>{props.item.title}</li>
)

const Items = (props) => (
    <div>
        <ul>
            { props.items.map((item) => <Item key={item.id} item={item} />)}
        </ul>
    </div>
)


class UnChecked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{id: 123, title: 'ruby'}, {id: 345, title: 'react'}]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Items items={this.state.items}/>
                <div>Form Component</div>
            </div>
        )
    }
}

ReactDOM.render(<UnChecked />, domElement);