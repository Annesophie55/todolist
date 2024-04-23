// interface utilisateur
// Attacher des écouteurs d'événements aux boutons ou à d'autres éléments interactifs.
// Afficher les tâches existantes dans l'interface.
// Réagir aux actions de l'utilisateur, comme cliquer sur un bouton pour ajouter une nouvelle tâche.


// rajouter un ecouteur et ensuite récupérer la valeur

//il faut que j'essai d'abord de récupérer les todos 

import { addTodo } from './todoListManager.js';

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

const ui = {
  updateTodo,
};

export default ui;



