import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

const domElement = document.getElementById('main');

const Header = (props) => (
    <div className="header">
        <h1>UnChecked App</h1>
        <p>Manage Dails Updates</p>
    </div>
)

const Item = (props) => (
    <li>
        <input type="checkbox" name="label" />
        <p>{props.item.title}
        <button onClick={()=>{props.deleteItem(props.item.id)}}>Remove This</button></p>
    </li>
)

const Items = (props) => (
    <div className="items">
        <ul>
            { props.items.map((item) => <Item key={item.id} item={item} deleteItem={props.deleteItem}/>)}
        </ul>
    </div>
)

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)  {
        e.preventDefault();
        const inputElement = e.target.children[0];
        if(inputElement.value.trim().length <= 2) {
            alert('enter minimum length 3');
        } else {
            this.props.setItem(inputElement.value);
            inputElement.value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search_text" id="search_text" placeholder="Enter Item" />
                    <input type="submit" value="Inject Item" />
                </form>
            </div>
        )
    }
}


class UnChecked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{id: 123, title: 'ruby'}, {id: 345, title: 'react'}]
        }
        this.setItem = this.setItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    setItem(item) {
        this.setState((prevState) => {
            return {
                items: [...prevState.items,{id: Math.random(), title: item}]
            }
        })
    }

    deleteItem(deleteItem) {
        this.setState((prevState) => {
            return  {
                items: prevState.items.filter((item) => (item.id != deleteItem))
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <Header />
                <Items items={this.state.items} deleteItem={this.deleteItem}/>
                <ItemForm setItem={this.setItem} />
            </div>
        )
    }
}

ReactDOM.render(<UnChecked />, domElement);