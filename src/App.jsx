import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const tasks = [
    {
      id: 1,
      display: 'Clean up room',
      completed: false,
    },
    {
      id: 2,
      display: 'Do homework',
      completed: false,
    },
    {
      id: 3,
      display: 'Read a book',
      completed: false,
    },
  ]

  const [taskInput, setTaskInput] = useState('')

  useEffect(() => {
    console.log("useEffect ran")
    // Write fetch logic here

  }, [])

  const addTask = () => {
    console.log("Add task")
    console.log(taskInput)
    // Write add task logic here

  }

  const deleteTask = (id) => {
    console.log("Delete task", id)
    // Write delete task logic here

  }

  return (
    <div className="container">
      <h1>Tasks</h1>
      <div className="task-form">
        <input value={taskInput} onChange={(e) => {setTaskInput(e.target.value)}} type="text" placeholder="Write a new task" />
        <button onClick={addTask}>Add</button>
      </div>
      <hr />
      <div className="task-container">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p>{task.display}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
