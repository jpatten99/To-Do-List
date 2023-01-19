import { TodoFactory } from "./Todo";
import { deactivateTopbarButtons, activateTodoForm, renderTodo, deactivateTodoForm, activateTopbarButtons,
renderProjectTitleBTN, activateCreateProjectBTN, deactivateCreateProjectBTN, activateProjectForm, deactivateProjectForm,
renderProject, renderSideBarBTNsOnLoad } from "./DOMStuff";
import { projectFactory } from "./project";

//Used for project.id assignment
var globalCounter = 0;
//holds all projects
var projects = [];

//TESTING FUNCTION
/*function localStorageTest(){
    console.log("The current state of projects array: ");
    console.log(projects);
    console.log("The current state of localStorage.projects: ");
    console.log(localStorage.getItem("projects"));
    console.log("The current state of localStore(parsed): ")
    console.log(JSON.parse(localStorage.getItem("projects")));
  }
*/


//put projects into localStorage when:
/*
1. New todo is created
2. New project is created
3. A todo is marked complete
4. A todo is deleted
*/
function populateStorage(){
  localStorage.projects = JSON.stringify(projects);
}



function loadFromLocal(){
  projects = JSON.parse(localStorage.getItem("projects"));
  renderProject(projects[0].todoArr);
  for (const p in projects){
    renderSideBarBTNsOnLoad(projects[p]);
  }
  globalCounter = projects.length;
}

//Run on load to add functionality to buttons
function initialize() {

  if (!localStorage.getItem('projects')) {
    //case if projects isn't found in local storage
    const defaultProject = projectFactory('default', globalCounter);
    projects.push(defaultProject);
    const defaultButton = document.createElement('button');
    defaultButton.innerText = 'default';
    defaultButton.setAttribute('id', globalCounter);
    document.getElementById('side-bar').appendChild(defaultButton);
    defaultButton.addEventListener('click', function(){
      
      global.pageID = 0;
      //displays current project name and id at top of page
      document.getElementById('currentProjectDisplay').innerText = `Current Project: ${defaultButton.innerText}`;
      //find project correlated to sidebar button and render it
      for (const i in projects) {
        if (projects[i].id == global.pageID) {
          // console.log(projects[i]);
          renderProject(projects[i].todoArr);
          // renderProject(JSON.parse(localStorage.getItem("projects"))[i].todoArr);
        }
      }
    })
    globalCounter++;
  }
  else {
    //case if projects is found in local storage
    loadFromLocal();
  }
  
  //Add event listener to erase content buttton
  document.getElementById('eraseBTN').addEventListener('click', function(){
    document.getElementById('content').innerHTML = "";
    localStorage.clear();
    localStorageTest();
  });
  
  //Add event listener to add Todo button
  document.getElementById('addToDoBTN').addEventListener('click', function(){
    deactivateTopbarButtons();
    activateTodoForm();
  });

  //Add event to submit Todo form button
  document.getElementById('TodoFormBTN').addEventListener('click', function(){
    const testToDo2 = TodoFactory(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value);
    if(!testToDo2.title) {testToDo2.title = '---';}
    if(!testToDo2.description) {testToDo2.description = '---';}
    if(!testToDo2.dueDate) {testToDo2.dueDate = '---';}
    projects[global.pageID].todoArr.push(testToDo2);
    renderTodo(testToDo2);
    document.getElementById('TodoForm').reset();
    deactivateTodoForm();
    activateTopbarButtons();
    populateStorage();
  });

   //Add event listener to create project button
   document.getElementById('addProjectBTN').addEventListener('click', function(){
    deactivateCreateProjectBTN();
    activateProjectForm();
  });

  //Add event listener to project submit button
  document.getElementById('projectFormBTN').addEventListener('click', function(){
    const testProject = projectFactory(projectName.value, globalCounter);
    if(!testProject.projectName) {testProject.projectName = globalCounter;}
    projects.push(testProject);
    renderProjectTitleBTN();
    deactivateProjectForm();
    activateCreateProjectBTN();
    globalCounter++;
    populateStorage();
  });
};


export { initialize, globalCounter, projects, populateStorage}