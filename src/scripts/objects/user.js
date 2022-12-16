const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName:"",
    linkProfile: "",
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.linkProfile = gitHubUser.html_url
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }