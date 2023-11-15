const ToDoList = ({ tasks }) => (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );

export { ToDoList }