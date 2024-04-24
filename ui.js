// interface utilisateur
// Attacher des écouteurs d'événements aux boutons ou à d'autres éléments interactifs.
// Afficher les tâches existantes dans l'interface.
// Réagir aux actions de l'utilisateur, comme cliquer sur un bouton pour ajouter une nouvelle tâche.


// rajouter un ecouteur et ensuite récupérer la valeur

//il faut que j'essai d'abord de récupérer les todos 

import { addTodo } from './todoListManager.js';
import { fetchTodo } from './data/todoData.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchTodo().then(todos => {

    todos[0].forEach(element => {
      console.log(element);
      const todoListItem = document.createElement('li');
      todoListItem.textContent = element.content;

      const checkIcon = document.createElement('i');
      checkIcon.className = 'fa-solid fa-check';

      todoListItem.appendChild(checkIcon);

      const todoList = document.getElementById('todo_list');
      todoList.appendChild(todoListItem);
    });
  }).catch(error => {
    console.error('Erreur lors de la récupération des tâches', error);
  })
});


export function updateTodo(newTodo) {
  document.getElementById('addTodo').addEventListener('click', (e)=>{

  e.preventDefault();

  newTodo = document.getElementById('newTodo').value;

  if(newTodo) {
    addTodo(newTodo);
  }

  else {
    console.log('Erreur au moment de la récupération de la tâche !');
  }


});}




