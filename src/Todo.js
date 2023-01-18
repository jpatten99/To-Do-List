import { projects } from "./initialize";
import { populateStorage } from "./initialize";


const TodoFactory = (title, description, dueDate, priority) => {
  let completed = false;
  return { title, description, dueDate, priority, completed };
};

//takes a todo and removes it from array
const spliceTodo = (evt) => {
  for (const i in projects) {
    if (projects[i].id == global.pageID) {
      for (const j in projects[i].todoArr) {
        if(projects[i].todoArr[j].title == evt.currentTarget.myParamObj.title && projects[i].todoArr[j].description == evt.currentTarget.myParamObj.description &&
          projects[i].todoArr[j].dueDate == evt.currentTarget.myParamObj.dueDate && projects[i].todoArr[j].priority == evt.currentTarget.myParamObj.priority)
        {
          projects[i].todoArr.splice(j, 1); 
          return;
        }
      }
    }
  }
} 

//takes a todo and changes its completed attribute to true
const markTodoAttrComplete = (evt) => {
  for (const i in projects) {
    if (projects[i].id == global.pageID) {
      for (const j in projects[i].todoArr) {
        if(projects[i].todoArr[j].title == evt.currentTarget.myParamObj2.title && projects[i].todoArr[j].description == evt.currentTarget.myParamObj2.description &&
          projects[i].todoArr[j].dueDate == evt.currentTarget.myParamObj2.dueDate && projects[i].todoArr[j].priority == evt.currentTarget.myParamObj2.priority
          && projects[i].todoArr[j].completed !=true)
        {
          projects[i].todoArr[j].completed = true;
          return;
        }
      }
    }
  }
} 

//Deletes Todo passed into this function and removes it from its parent project's todo array
function deleteTodo(evt) {
  evt.currentTarget.myParam.remove();
  spliceTodo(evt);
  populateStorage();
}

//Marks Todo as complete and changes todo's completed value to true
function completeTodo(evt) {
  if(!evt.currentTarget.myParam2.hasAttribute('id')){
    evt.currentTarget.myParam2.setAttribute('id', 'complete');
    markTodoAttrComplete(evt);
    populateStorage();
  }
}

export {
  TodoFactory,
  spliceTodo,
  markTodoAttrComplete,
  deleteTodo,
  completeTodo,
};