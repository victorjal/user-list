// Obtener la cadena de consulta (query string)
const queryString = window.location.search;

// Crear un objeto URLSearchParams a partir de la cadena de consulta
const urlParams = new URLSearchParams(queryString);

// Obtener el valor del parámetro "parametro1"
const userId = urlParams.get('userId');

let userList = document.getElementById('postList');

fetch('https://jsonplaceholder.typicode.com/posts?userId='+ userId +'')
    .catch(error => console.error(error))
    .then((response) => response.json())
    .then((json) => console.log(json));