import { TodoFactory } from "./Todo";
import { deactivateTopbarButtons, activateTodoForm, renderTodo, deactivateTodoForm, activateTopbarButtons, renderProjectTitleBTN, activateCreateProjectBTN, deactivateCreateProjectBTN, activateProjectForm, deactivateProjectForm, pageID, renderProject } from "./DOMStuff";
import { projectFactory } from "./project";


var globalCounter = 0;

var projects = [];

function localStorageTest(){
 console.log("The current state of projects array: ");
 console.log(projects);
 console.log("The current state of localStorage.projects: ");
 console.log(localStorage.getItem("projects"));
 console.log("The current state of localStore(parsed): ")
 console.log(JSON.parse(localStorage.getItem("projects")));
}

function populateStorage(){
  localStorage.projects = JSON.stringify(projects);
}


const renderSideBarBTNsOnLoad = (project) => {
  const projectButton = document.createElement('button');
  projectButton.innerText = project.projectName;
  projectButton.setAttribute('id', project.id);
  document.getElementById('side-bar').appendChild(projectButton);
  projectButton.addEventListener('click', function(){
    
    global.pageID = projectButton.getAttribute('id');
    //displays current project name and id at top of page
    document.getElementById('currentProjectDisplay').innerText = `Current Project: ${projectButton.innerText} (ID:${global.pageID})`;
    //find project correlated to sidebar button and render it
    for (const i in projects) {
      if (projects[i].id == global.pageID) {
        renderProject(projects[i].todoArr)
      }
    }
  })
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
      document.getElementById('currentProjectDisplay').innerText = `Current Project: ${defaultButton.innerText} (ID:${global.pageID})`;
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


  } else {
    //case if projects is found in local storage
    loadFromLocal();
  }

  // const defaultProject = projectFactory('default', globalCounter);
  // projects.push(defaultProject);
  // const defaultButton = document.createElement('button');
  // defaultButton.innerText = 'default';
  // defaultButton.setAttribute('id', globalCounter);
  // document.getElementById('side-bar').appendChild(defaultButton);
  // defaultButton.addEventListener('click', function(){
    
  //   global.pageID = 0;
  //   //displays current project name and id at top of page
  //   document.getElementById('currentProjectDisplay').innerText = `Current Project: ${defaultButton.innerText} (ID:${global.pageID})`;
  //   //find project correlated to sidebar button and render it
  //   for (const i in projects) {
  //     if (projects[i].id == global.pageID) {
  //       // console.log(projects[i]);
  //       renderProject(projects[i].todoArr);
  //       // renderProject(JSON.parse(localStorage.getItem("projects"))[i].todoArr);
  //     }
  //   }
  // })
  // globalCounter++;
  
  
  
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
    projects.push(testProject);
    renderProjectTitleBTN();
    deactivateProjectForm();
    activateCreateProjectBTN();
    globalCounter++;
    populateStorage();
  });
};


export { initialize, globalCounter, projects, populateStorage}