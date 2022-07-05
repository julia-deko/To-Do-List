import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

class TaskList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tasks.map(task => {
                        return <Task key={task.id} task={task}/>
                    })
                }
            </div>
        )
    }
}


export default TaskList;