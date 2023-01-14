import { clearContent, displayToDo, displayForm, removeForm, removeButtons, displayButtons } from './DOMStuff';
import { todoFactory } from './todo.js';

//Add functionality to buttons
(function intitialize() {
  
  //Add event listener to erase buttton
  const eraseBTN = document.getElementById('eraseBTN');
  eraseBTN.addEventListener('click', function(){clearContent()});

  //Add event listener to add todo button
  const addToDoBTN = document.getElementById('addToDoBTN');
  addToDoBTN.addEventListener('click', function(){
    removeButtons();
    displayForm();
  });

  //Add event to submit form button
  const formBTN = document.getElementById('formBTN');
  formBTN.addEventListener('click', (event) => {
    const myForm = document.getElementById('myform');
    const testToDo2 = todoFactory(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value);
    displayToDo(testToDo2);
    myForm.reset();
    removeForm();
    displayButtons();
  }) 
})();