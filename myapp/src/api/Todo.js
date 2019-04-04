export function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
