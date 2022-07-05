import React from 'react';
import './AddBar.css';


class AddBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: ''
        }

        this.add = this.add.bind(this);
        this.handleEntryChange = this.handleEntryChange.bind(this);
    }

    add() {
        this.props.onAdd(this.state.entry);
    }

    handleEntryChange(event) {
        this.setState({entry: event.target.value});
    }
 

    render() {
        return (
            <div className="AddBar">
                <input onChange={this.handleEntryChange}/>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default AddBar;