window.onload = () => {
  // TECLA ENTER
  function enterKey(ev) {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      document.getElementById('criar-tarefa').click();
    }
  }
  document.body.addEventListener('keypress', enterKey);
};

const inputBox = document.getElementById('texto-tarefa');
const inputButton = document.getElementById('criar-tarefa');
const clearListButton = document.getElementById('apaga-tudo');
const doneListButton = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const todoList = document.getElementById('lista-tarefas');

// BOTÃO ADICIONAR
inputButton.addEventListener('click', () => {
  const addTask = document.createElement('li');
  addTask.innerText = inputBox.value;
  inputBox.value = '';
  todoList.appendChild(addTask);
});

// DESTACAR ELEMENTO DA LISTA
todoList.addEventListener('click', (ev) => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    selectedItem.classList.remove('selected');
  }
  ev.target.classList.add('selected');
  // selectedItem[0].classList.remove('selected');
});

// DUPLO CLIQUE
todoList.addEventListener('dblclick', (ev) => {
  if (ev.target.classList.contains('completed')) {
    ev.target.classList.remove('completed');
  } else {
    ev.target.classList.add('completed');
  }
});

// LIMPAR LISTA
clearListButton.addEventListener('click', () => {
  todoList.textContent = '';
});

// REMOVER FINALIZADOS
doneListButton.addEventListener('click', () => {
  const doneList = document.querySelectorAll('.completed');
  for (let i = 0; i < doneList.length; i += 1) {
    doneList[i].remove();
  }
});

// SALVAR LISTA
saveListButton.addEventListener('click', () => {
  console.log('click');
});
