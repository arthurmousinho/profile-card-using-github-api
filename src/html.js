const Html = {
    restartLink() {
        const restartLink = document.createElement('a')
        restartLink.href = 'index.html'
        restartLink.classList.add('restart-link')
        restartLink.innerHTML = 'Restart'

        return restartLink
    },

    profileCard(userObject) {
        const profileCard = document.createElement('div')
        profileCard.classList.add('profile-card')
        profileCard.innerHTML = `
            <img src="${userObject.avatar_url}" alt="" id="avatar">
            <div class="content-container">
                <h2 id="name">${userObject.name}</h2>
                <p id="bio">${userObject.bio}</p>
                <a href="${userObject.html_url}" id="github-link" target="_blank">
                    @${userObject.login}
                </a>
            </div>
        `

        return profileCard
    }
}