import React, { useState } from 'react';
import CreateTask from './createtask';

const ToDo = () => {
    const [tasks, setTask] = useState([
        {
            title: 'Bhupendra',
            isCompleted: true
        },
        {
            title: 'Advait',
            isCompleted: false
        }
    ]);

    
    const Task = (props) => {
        const { task, index, isCompleted } = props;
        return (
            <div className="todo-app">
                <ul className="uiClass"> 
                    <li>
                    <div style={{ textDecoration: task.isCompleted ? 'line-through':''}} >
                        {task.title}
                        <button className="compltebBtn" onClick={() => completeTask(index)}>Complete</button>
                        <button className="removebBtn" onClick={() => removetask(index)}>Remove</button>
                    </div>
                    </li>
                </ul> 
            </div>    
        )
    }

    const appendTask = (title) => {
        const newArray = [...tasks, {title, isCompleted: false}];
        setTask(newArray);
    }

    const completeTask = (index) => {
        const newtask = [...tasks];
        newtask[index].isCompleted = true;
        setTask(newtask);
    }

    const removetask =(index) => {
        const newtask = [...tasks];
        newtask.splice(index, 1);
        setTask(newtask);
    }

    return (
        <div>
            <CreateTask  appendTask={appendTask}/>
            {
                tasks.map((task, index) => (
                <Task
                    task={task}
                    index={index}
                    key={index}
                />
            ))
            }
            
        </div>
    )
}

export default ToDo;