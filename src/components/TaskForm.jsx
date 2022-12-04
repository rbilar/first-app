import { useState } from 'react';

function TaskForm({ task }) {
  const [name, setName] = useState(task.name)
  const [done, setDone] = useState(task.done)

  function handleRegister(e) {
    if (name === '') {
      alert('Preencha a tarefa')
      e.preventDefault()
      return null
    }

    // Get Tasks
    const tasksStorage = localStorage.getItem('@first-app-tasks')
    let tasks = JSON.parse(tasksStorage) || []

    // Set Tasks
    tasks.push({ id: tasks.length, name: name, done: done })
    localStorage.setItem('@first-app-tasks', JSON.stringify(tasks))
  }

  return (
    <form onSubmit={handleRegister}>
      <p>
        <label>
          Tarefa:
          <input
            placeholder="Digite a tarefa"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Concluída
          <input
            id="done"
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          />
        </label>
      </p>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default TaskForm;
