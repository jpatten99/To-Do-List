const projectFactory = (projectName) => {
  const logger = () => {
    console.log(projectName);
  }
  return { projectName, logger };
}

export {
  projectFactory
};