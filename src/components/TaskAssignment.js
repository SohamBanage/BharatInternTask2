import React,{useState} from "react";
import './Style.css'

const TaskAssignment=()=>{
    const[tasks,setTask]=useState([]);
    const[newTask,setNewTask]=useState('');

    const handleAddTask=()=>{
        if(newTask){
            setTask([...tasks,newTask]);
            setNewTask('');
        }
    };
    return(
        <div className="TaskAssignment">
            <h2>Task Assignment</h2>
            <div>
                <input 
                type="text"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                placeholder="Enter The Task"/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
                <ul>
                    {tasks.map((task,index)=>(
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

};
export default TaskAssignment;