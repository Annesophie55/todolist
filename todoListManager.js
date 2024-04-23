// ici je gère les logiques d'ajout, supression etc / c'est ma classe 
// Ajouter une nouvelle tâche à la liste.
// Supprimer une tâche existante.
// Marquer une tâche comme complétée.
// Sauvegarder l'état actuel des tâches (dans le stockage local du navigateur ou sur un serveur distant). Pensez à génerer une id unique
import { seedTodo } from "./data/todoData.js";

class Todo {

  constructor(id= crypto.randomUUID(), content, status = false, createdAt = new Date(), type) {
    this.id = id,
    this.content = content,
    this.status = status,
    this.createdAt = createdAt,
    this.type = type;
  }

}

export function addTodo(newTodo) {

  let todo = new Todo(undefined, newTodo);
  let todos = [];
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  //enregistement des todo dans la base restapi de dyma
  seedTodo(todos);
}
