const todoList = ['make lunch', 'workout'];

renderTodoList ();

function renderTodoList ()
{
  let todoListHTML = '';
for (let i = 0; i < todoList.length; i++)
{
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo()
{
  const inputElme = document.querySelector('.js-name-input');
  const name= inputElme.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElme.value = '';

  renderTodoList ();
}