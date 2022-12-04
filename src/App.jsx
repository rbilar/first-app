import { useState, useEffect } from 'react';
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'

function App() {
  const [task] = useState({ id: null, done: '', name: '' })
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const tasksStorage = localStorage.getItem('@first-app-tasks')
    console.log(tasksStorage)
    if (tasksStorage === null) return;

    setTasks(JSON.parse(tasksStorage))
  }, [])

  return (
    <div>
      <h1>Tarefas</h1>
      <h2>Lista</h2>
      {
        tasks.map(task => (
          <TaskItem task={task} />
        ))
      }
      <h2>Nova</h2>
      <TaskForm task={task} />
    </div>
  );
}

export default App;
