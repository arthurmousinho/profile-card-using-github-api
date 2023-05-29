const button = document.querySelector('#seach-button')
const main = document.querySelector('main')

button.addEventListener('click', async () => {
    if (Validation.inputIsEmpty()) {
        alert('You need to enter your github username to keep going')
    } else {
        const username = document.querySelector('#github-username-input').value
        const userObject = await getUser(username)

        main.innerHTML = ''
        
        const profileCard = Html.profileCard(userObject)
        const restartLink = Html.restartLink()
        
        main.appendChild(profileCard)
        main.appendChild(restartLink)
    }
})