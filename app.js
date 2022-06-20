function userData(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => loadingUser(data))
}
function userAlbum(){
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then( res => res.json())
        .then (data => loadingUser(data))
}

function loadingUser(data){
    const ui = document.getElementById('userDetails')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = `${user?.name} 
                        email: ${user?.email}
                        title: ${user?.title}`
        ui.appendChild(li)
        console.log(user.name);
    }
}
