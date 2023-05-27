async function getUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`) 
        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            const json = await response.json()
            return json
        }
    } catch (error) {
        alert('User not found')
        window.location.reload()
    }
}