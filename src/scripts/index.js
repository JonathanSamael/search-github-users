import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js";

document.getElementById("btn-search").addEventListener("click", () => {
    const inputName = document.getElementById("input-search").value;
    
    if(validateEmptyInput(inputName)) return;
    getUserData(inputName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
    const inputName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;
    
    if (isEnterKeyPressed) {
        if(validateEmptyInput(inputName)) return;
        getUserData(inputName);
    }
})

function validateEmptyInput(inputName) {
    if(inputName.length === 0) {
        alert("Preencha o campo com o nome do usuário do GitHub")
        return true
    }
}

async function getUserData(userName) {
    
    const userResponse = await getUser(userName)
    
    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    };
    
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
    screen.renderRepositories(user)
    screen.renderEvents(user)

};