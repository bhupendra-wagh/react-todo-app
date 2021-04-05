import React, { useState } from 'react';


const CreateTask = ({appendTask}) => {
    const [value, SetValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        appendTask(value);
        SetValue("");
    }
    
    return (    
        <form onSubmit={handleSubmit}>
            <input
                className="inputText"
                value={value}
                onChange={(e) => SetValue(e.target.value)}
                placeholder="Add a task"
            />
        </form>
    )

}
export default CreateTask;