function TaskItem({ task }) {
  return (
    <>
      <input id={task.index} type="checkbox" checked={task.done} disabled="false" />
      <label for={task.index}>{task.name}</label>
      <br />
    </>
  );
}

export default TaskItem;
