import React, {useState} from "react";

function TodoList() {

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask () {
        if (newTask.trim() !== "") { // checks if input is not empty or just spaces
            setTask(t => [newTask, ...tasks]); // spread the prev tasks and add new task
            setNewTask(""); // clear input field after adding
        }
    }

    function deleteTask (index) {
        const updatedTasks = tasks.filter((_, i) => i !== index); // create a new array without the (selected) task at the given index
        setTask(updatedTasks);
    }

    function moveTaskUp (index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]; // swap the task with the one above it
            setTask(updatedTasks);
        }
    }

    function moveTaskDown (index) {
        if (index < tasks.length - 1) { // check if not the last task
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]; // swap the task with the one below it
            setTask(updatedTasks);
        }
    }

    return (
    
    <>
                <div className = "todo-list">

                    <h1>mini todo list</h1>
                    <div className = "input-section">
                        <input
                            type = "text"
                            placeholder = "hmm.. what should i do next?"
                            value = {newTask}
                            onChange = {handleInputChange}
                            onKeyDown = {event => {
                                if (event.key === "Enter") {
                                addTask();
                                }
                            }}
                            />
                            <button
                                className = "add-button"
                                onClick = {addTask}
                                >
                                +
                            </button>
                    </div>

                    <div className = "task-cont">
                        <ol
                            className = "task-list" >
                            {tasks.map((task, index) => (
                                <li key = {index}>
                                    <span className = "task text"> {task} </span>
                                    <button
                                        className = "delete-button"
                                        onClick = {() => deleteTask(index)}>
                                        delete
                                    </button>

                                    <button
                                        className = "move-button"
                                        onClick = {() => moveTaskUp (index)}>
                                        move up
                                    </button>

                                    <button
                                        className = "move-button"
                                        onClick = {() => moveTaskDown (index)}>
                                        move down
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>

        </div>
    </>
    );

}

export default TodoList;