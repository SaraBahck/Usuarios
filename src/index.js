const usuarios = [
    {
        nome: "User1",
        idade: 100,
    },
    {
        nome: "User2",
        idade: 18,
    },
    {
        nome: "User3",
        idade: 15,
    },
    {
        nome: "User4",
        idade: 17,
    },
    {
        nome: "User5",
        idade: 32,
    },
]

for (let u of usuarios) {
    if (u.idade > 17) {
        u.maior_idade = true
    } else {
        u.maior_idade = false
    }
}
console.log(usuarios)