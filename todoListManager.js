// ici je gère les logiques d'ajout, supression etc / c'est ma classe 
// Ajouter une nouvelle tâche à la liste.
// Supprimer une tâche existante.
// Marquer une tâche comme complétée.
// Sauvegarder l'état actuel des tâches (dans le stockage local du navigateur ou sur un serveur distant). Pensez à génerer une id unique


class Todo {

  constructor(id= crypto.randomUUID(), content, status, createdAt = new Date()) {
    this.id = id,
    this.content = content,
    this.status = status,
    this.createdAt = createdAt;
  }
}