const buddyGenerate = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => displayingBuddy(data))
}

const displayingBuddy = (buddies) => {
    const buddyContainer = document.getElementById("buddy-Container");
    for(const buddy of buddies.results){
        const div = document.createElement('div')
        div.classList.add('buddy-style')
        console.log(buddy);
        div.innerHTML = `<h1>${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h1>
        <h4>${buddy.email}</h4>
        <p> ${buddy.location.state}, ${buddy.location.country}</p>
        <img src="${buddy.picture.large}">`;
        buddyContainer.appendChild(div)

    }
}