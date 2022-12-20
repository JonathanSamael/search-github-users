const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName:"",
    linkProfile: "",
    followers: "",
    following: "",
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.linkProfile = gitHubUser.html_url
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }