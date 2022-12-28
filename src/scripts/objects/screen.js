const screen = {
    userProfile: document.querySelector(".profile-data"),
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
    },

    renderRepositories(repositories) {
        
        let repositoriesItens = ""
        repositories.repositories.forEach((repo) => {

            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                        <div class="items-container">
                                            <p class="item-repo">🍴${repo.forks}</p>
                                            <p class="item-repo">⭐${repo.stargazers_count}</p>
                                            <p class="item-repo">👀${repo.watchers}</p>
                                            <p class="item-repo">🧑🏽‍💻${repo.language ?? "---"}</p>
                                        </div>
                                    </a>
                                 </li>`
        });

        if (repositories.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
 
    renderEvents(events) {
        
        let listEvents = events.events.filter(event => event.type === "PushEvent" || event.type === "CreateEvent");
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

        if (listEvents.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Últimos Eventos</h2>
                                                <ul>${eventsItens}</ul> 
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Últimos Eventos</h2>
                                                <p>Não possui eventos <strong>Push</strong> ou <strong>Create</strong> nos últimos 90 dias</p> 
                                            </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { screen }