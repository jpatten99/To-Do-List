const projectFactory = (projectName, id) => {
  const todoArr = [];
  return { projectName, id, todoArr };
}



export {
  projectFactory
};