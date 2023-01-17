const TodoFactory = (title, description, dueDate, priority) => {
  let completed = false;
  return { title, description, dueDate, priority, completed };
};

export {
  TodoFactory
};