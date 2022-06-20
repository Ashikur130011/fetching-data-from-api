function loadComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => loadingComments(data));
}

function loadingComments(comments){
    const commentsContrainer = document.getElementById('comment')
    for(const comment of comments){
        const div = document.createElement('div')
        div.classList.add('style')
        div.innerHTML = `
        <h1>Name: ${comment.name.slice(0,15)}</h1>
        <h4>Email: ${comment.email}</h4>
        <p>Body: ${comment.body}</p>`
        console.log(div);
        commentsContrainer.appendChild(div)
    }
}