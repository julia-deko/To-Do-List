import React from 'react';
import './Task.css';


class Task extends React.Component {
    render() {
        return (
            <div className="Task">
                <p>{this.props.task.text}</p>
                <p>-</p>
            </div>
        );
    }
}

export default Task;