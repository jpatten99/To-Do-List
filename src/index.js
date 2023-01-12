import { clearContent, displayToDo, displayForm, removeForm, removeButtons, displayButtons } from './DOMStuff';
import { todoFactory } from './todo.js';

(function component() {
  
  const eraseBTN = document.getElementById('eraseBTN');
  eraseBTN.addEventListener('click', function(){clearContent()});

  const addToDoBTN = document.getElementById('addToDoBTN');
  addToDoBTN.addEventListener('click', function(){
    removeButtons();
    displayForm();
  });

  const formBTN = document.getElementById('formBTN');
  formBTN.addEventListener('click', (event) => {
    const myForm = document.getElementById('myform');
    const testToDo2 = todoFactory(title.value, description.value, dueDate.value, priority.value);
    displayToDo(testToDo2);
    myForm.reset();
    removeForm();
    displayButtons();
  })

 
})();