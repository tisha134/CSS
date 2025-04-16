const todoList = [{
  name: 'make lunch',
  dueDate: '2024-03-15'
},
{
  name: 'wash dishes',
  dueDate: '2024-03-15'
}]

renderTodoList ();

function renderTodoList ()
{
  let todoListHTML = '';
for (let i = 0; i < todoList.length; i++)
{
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject; //destructuring
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick = "
      todoList.splice(${i}, 1);
      renderTodoList();
    " class = "delete-todo-btn">Delete</button>
    `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo()
{
  const inputElme = document.querySelector('.js-name-input');
  const name= inputElme.value;

  const dateinputElem = document.querySelector('.js-due-date-input');
  const dueDate = dateinputElem.value;
  
  todoList.push({
    name, //name: name
    dueDate //shorthand property for an object dueDate: dueDate
});

  inputElme.value = '';

  renderTodoList ();
}