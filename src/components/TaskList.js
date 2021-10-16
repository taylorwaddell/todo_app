import React from 'react';
import "../assets/scss/components/TaskList.scss";
import Task from './Task';

function TaskList({ isCompleted = false }) {
    return (
        <>
            <div className="taskList-container">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </>
    )
}

export default TaskList
