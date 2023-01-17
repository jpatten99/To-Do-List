import { TodoFactory } from "./Todo";
import { deactivateTopbarButtons, activateTodoForm, renderTodo, deactivateTodoForm, activateTopbarButtons, renderProjectTitleBTN, activateCreateProjectBTN, deactivateCreateProjectBTN, activateProjectForm, deactivateProjectForm, pageID } from "./DOMStuff";
import { projectFactory } from "./project";

var globalCounter = 0;

const projects = [];

//Run on load to add functionality to buttons
function initialize() {

  projects.push(projectFactory('default', globalCounter));
  globalCounter++;
  
  
  //Add event listener to erase content buttton
  document.getElementById('eraseBTN').addEventListener('click', function(){
    document.getElementById('content').innerHTML = "";
  });
  
  //Add event listener to add Todo button
  document.getElementById('addToDoBTN').addEventListener('click', function(){
    deactivateTopbarButtons();
    activateTodoForm();
  });

  //Add event to submit Todo form button
  document.getElementById('TodoFormBTN').addEventListener('click', function(){
    const testToDo2 = TodoFactory(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value);
    projects[pageID].todoArr.push(testToDo2);
    renderTodo(testToDo2);
    document.getElementById('TodoForm').reset();
    deactivateTodoForm();
    activateTopbarButtons();
  });

   //Add event listener to create project button
   document.getElementById('addProjectBTN').addEventListener('click', function(){
    deactivateCreateProjectBTN();
    activateProjectForm();
  });

  //Add event listener to project submit button
  document.getElementById('projectFormBTN').addEventListener('click', function(){
    const testProject = projectFactory(projectName.value, globalCounter);
    projects.push(testProject);
    renderProjectTitleBTN();
    deactivateProjectForm();
    activateCreateProjectBTN();
    console.log(projects);
    globalCounter++;
  });
};

export { initialize, globalCounter, projects}