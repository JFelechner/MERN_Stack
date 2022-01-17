import React, { useState } from 'react';


const ToDoList = props => {
    let [taskName, setTaskName] = useState("")

    let [completedTask, setCompletedTask] = useState(false)

    let [listOfTasks, setListOfTasks] = useState([]);

    const createTask = (e) => {
        e.preventDefault();
        console.log("form submitted")
        let taskObj = { taskName }
        setListOfTasks([...listOfTasks, taskObj])
        document.getElementById('taskInput').value = ""
    }

    const toggleTaskCompleted = (idx) => {
        let [...copyOfListOfTasks] = listOfTasks;
        copyOfListOfTasks[idx].completedTask =! copyOfListOfTasks[idx].completedTask
        setListOfTasks(copyOfListOfTasks);
    }

    const deleteTask = (idx) => {
        const filteredListOfTasks = listOfTasks.filter((item, i) => {
            return i != idx;
        });
        setListOfTasks(filteredListOfTasks);
    }

    return (
        <>

            <div class="container px-4 mt-5">
                <div class="row gx-5">

                    {/* left column */}
                    <div class="col">
                        <div class="p-3 border bg-light">

                            {/* left header */}
                            <h1 class="text-decoration-underline">Add Task:</h1>

                            {/* form */}
                            <form onSubmit={createTask}>
                                <div class="mb-3">
                                    <label htmlfor="" class="form-label">Task:</label>
                                    <input id="taskInput" type="text" class="form-control" onChange={(e) => setTaskName(e.target.value)} />
                                </div>
                                <button type="submit" class="btn btn-primary">Add</button>
                            </form>

                        </div>
                    </div>

                    {/* right column */}
                    <div class="col">
                        <div class="p-3 border bg-light">
                        <h2 class="text-decoration-underline">To Do List:</h2>
            {
                listOfTasks.map((task, i)=>{
                    return (
                        <div class="d-flex align-items-center" key = {i}>
                            <h4 style = {{ textDecoration: task.completedTask? "line-through": "none"}}>•{task.taskName}</h4>
                            <p class="ms-3 mt-2"><input type="checkbox" className="ty" onClick = {()=>toggleTaskCompleted(i)} /></p>
                            <button class="btn btn-primary btn-sm ms-3" onClick={()=> 
                                deleteTask(i)
                            }>
                                Delete
                            </button>
                        </div>
                    )
                })
            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default ToDoList;