import { TodoFactory } from "./Todo";
import { deactivateTopbarButtons, activateTodoForm, renderTodo, deactivateTodoForm, activateTopbarButtons, displayNewProjectBTN, activateCreateProjectBTN, deactivateCreateProjectBTN, activateProjectForm, deactivateProjectForm } from "./DOMStuff";


//Run on load to add functionality to buttons
function initialize() {
  
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
    renderTodo(testToDo2);
    document.getElementById('TodoForm').reset();
    deactivateTodoForm();
    activateTopbarButtons();
  });

   //Add event listener to project submit button
   document.getElementById('addProjectBTN').addEventListener('click', function(){
    deactivateCreateProjectBTN();
    activateProjectForm();
  });

  //Add event listener to project submit button
  document.getElementById('projectFormBTN').addEventListener('click', function(){
    displayNewProjectBTN();
    document.getElementById('projectForm').reset();
    deactivateProjectForm();
    activateCreateProjectBTN();
  });
};

export { initialize }