function buscaGithub(){
    let perfil = document.getElementById("perfil").value 

    let imagem = document.getElementById("imagem")
    let nome = document.getElementById("nome")
    let username = document.getElementById("username")
    let qtdrepos = document.getElementById("qtdrepos")
    let qtdseg = document.getElementById("qtdseg")
    let qtdusers = document.getElementById("qtdusers")
    let repos = document.getElementById("repos")

    let url = "https://api.github.com/users/"+perfil

    fetch(url)
        .then(res => res.json())
        .then(data =>{
            imagem.innerHTML = `<img src="${data.avatar_url}">`;
            nome.value = "Nome: " + data.name
            username.value = "Username: " + data.login
            qtdrepos.value = "Repositórios: " + data.public_repos
            qtdseg.value = "Seguidores: " + data.followers
            qtdusers.value = "Seguindo: " + data.following
            repos.value = "Link: " + data.url
        })

}
