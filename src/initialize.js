import { TodoFactory } from "./Todo";
import { removeButtons, displayForm, displayToDo, removeForm, displayButtons, addProjectBTN } from "./DOMStuff";

//Add event listener to erase content button
const setEraseContentBTN = () => {
  const content = document.getElementById('content');
  content.innerHTML = "";
}

//Add event listener to add Todo button
const setAddTodoBTN = () => {
  removeButtons();
  displayForm();
}

//Add event to submit Todo form button
const setSubmitTodoBTN = () => {
  const TodoForm = document.getElementById('TodoForm');
  const testToDo2 = TodoFactory(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value);
  displayToDo(testToDo2);
  TodoForm.reset();
  removeForm();
  displayButtons();
}

//Add event listener to project submit button
const setAddProjectBTN = () => {
  // alert('Project created');
  addProjectBTN();
}

//Run on load to add functionality to buttons
function initialize() {
  
  //Add event listener to erase content buttton
  const eraseBTN = document.getElementById('eraseBTN');
  eraseBTN.addEventListener('click', function(){setEraseContentBTN()});

  //Add event listener to add Todo button
  const addToDoBTN = document.getElementById('addToDoBTN');
  addToDoBTN.addEventListener('click', function(){
    setAddTodoBTN();
  });

  //Add event to submit Todo form button
  const TodoFormBTN = document.getElementById('TodoFormBTN');
  TodoFormBTN.addEventListener('click', function(){
   setSubmitTodoBTN();
  }) 

  //Add event listener to project submit button
  const projectFormBTN = document.getElementById('projectForm');
  projectFormBTN.addEventListener('click', function(){setAddProjectBTN()});

};

export { initialize }