let userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .catch(error => console.error(error))
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let userListHTML = json.map((user) => 
        '<tr><th scope="row">'+ user.id +'</th><td>'+ user.name +'</td><td>'+ user.username +'</td><td>'+ user.email +'</td><td><a href="./profile.html?userId='+ user.id +'">details...</a></td></tr>').join('');
        userList.innerHTML = userListHTML;
    });

