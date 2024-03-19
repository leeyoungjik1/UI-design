async function showAvatar(){
    let response = await fetch("user.json")
    let user = await response.json()

    let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let githubUser = await gitHubResponse.json()

    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    document.body.append(img)

    setTimeout(() => {
        img.remove()
        resolve(githubUser)
      }, 3000) 
}

showAvatar()
.then(githubUser => alert(`${githubUser.name}의 이미지를 성공적으로 출력하였습니다.`))