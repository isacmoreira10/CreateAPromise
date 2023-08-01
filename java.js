// Criação da promise
const myPromise = new Promise((resolve, reject) => {
    const name = 'Marombeiro refinado'

    if (name === 'Marombeiro refinado') {
        resolve('Usuário Marombeiro refinado encontrado!')
    } else {
        reject(alert('O usuário Marombeiro refinado não foi encontrado!'))
    }
})

myPromise
    .then((data) => {
        return data.toUpperCase()
    })
    .then((stringAlterada) => {
        console.log(stringAlterada)
    })

// Encadeamento de then´s   

const myPromise2 = new Promise((resolve, reject) => {
    const string = 'isac'

    if (string === 'isac') {
        resolve('Usuário isac foi encontrado!')
    } else {
        reject('Usuário isac não foi encontrado!')
    }
})

myPromise2
    .then((data) => {
        return data.toUpperCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada)
    })

// Retorno do catch   

const myPromise3 = new Promise((resolve, reject) => {
    const string1 = 'João'

    if (string1 === 'Carlos') {
        resolve('Usuario carlos foi encontrado')
    } else {
        reject('Usuário Carlos não foi encontrado')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log('Aconteceu um erro : ' + err)
    })

// Resolver várias promises 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 ok!")
    }, 5000)

})

const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok!")
})

const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// Fetch request na API do Github
// Fetch API

const userName = 'isacmoreira10'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`O nome do usuário é: ${data.name}`)
    })
    .catch((err) => {
        console.log(`Houve algum erro: ${err}`)
    })