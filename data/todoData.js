const BASE_URL_API = 'https://restapi.fr/api/todos';

export async function seedTodo(todos) {
  await fetch(BASE_URL_API, {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(todos)
  })
}


export async function fetchTodo() {


  try{
    const response = await fetch(BASE_URL_API);

    if(response.ok) {
      const todos = [await response.json()];
      return todos;
    }
  }
  catch (e) {
    console.log('erreur lors de la récupération des tâches !');
  }
}
