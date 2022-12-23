import { infosProfile } from "../variables.js"

const screen = {
    userProfile: infosProfile,
    renderUser(user) {
        this.userProfile.innerHTML =
                                    `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuário">
                                        <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado 😅"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada 😅"} </p>
                                            <p>Followers ${user.followers} • Following ${user.following}</p>
                                            <a target="_blank" href="${user.linkProfile}">Link to profile!</a>
                                        </div>
                                     </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        
        const validEvents = user.events
        let listEvents = validEvents.filter(event => event.type === "PushEvent" || event.type === "CreateEvent");
        let eventsItens = ""

        listEvents.forEach((event) => {

            let nameRepositories = event.repo.name
            
            if (event.payload.commits) {
                let messageCommit = event.payload.commits[0].message
            
                eventsItens += `<li><p>- <strong>${nameRepositories}</strong> - <br> ${messageCommit}</p></li>`
                    
            } else {
                eventsItens += `<li><p>- <strong>${nameRepositories}</strong> - <br>Evento não possui commit</p></li>`
            } 
        })
                
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Últimos Eventos</h2>
                                                <ul>${eventsItens}</ul> 
                                            </div>`
            console.log(eventsItens);

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { screen }