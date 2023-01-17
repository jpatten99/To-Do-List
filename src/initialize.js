import { TodoFactory } from "./Todo";
import { deactivateTopbarButtons, activateTodoForm, renderTodo, deactivateTodoForm, activateTopbarButtons, renderProjectTitleBTN, activateCreateProjectBTN, deactivateCreateProjectBTN, activateProjectForm, deactivateProjectForm, pageID, renderProject } from "./DOMStuff";
import { projectFactory } from "./project";

var globalCounter = 0;

const projects = [];

//Run on load to add functionality to buttons
function initialize() {

  const defaultProject = projectFactory('default', globalCounter);
  projects.push(defaultProject);
  const defaultButton = document.createElement('button');
  defaultButton.innerText = 'default';
  defaultButton.setAttribute('id', globalCounter);
  document.getElementById('side-bar').appendChild(defaultButton);
  defaultButton.addEventListener('click', function(){
    
    global.pageID = 0;
    //displays current project name and id at top of page
    document.getElementById('currentProjectDisplay').innerText = `Current Project: ${defaultButton.innerText} (ID:${global.pageID})`;
    //find project correlated to sidebar button and render it
    for (const i in projects) {
      if (projects[i].id == global.pageID) {
        // console.log(projects[i]);
        renderProject(projects[i].todoArr)
      }
    }
  })
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
    projects[global.pageID].todoArr.push(testToDo2);
    renderTodo(testToDo2);
    document.getElementById('TodoForm').reset();
    deactivateTodoForm();
    activateTopbarButtons();
    // console.log('projects: ');
    // console.log(projects);
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
    // console.log('projects: ');
    // console.log(projects);
    globalCounter++;
  });
};

export { initialize, globalCounter, projects}