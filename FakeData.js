const UserList = [
    {
        id: 1,
        name: "John",
        username: "John",
        age: 20,
        nationality: "Canada",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "Brazil",
            },
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "Brazil",
        friends: [
            {
                id: 1,
                name: "John",
                username: "John",
                age: 20,
                nationality: "Canada",
            },
        ]
    },
    { 
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "USD",
    },
    {
        id: 4,
        name: "Rafe",
        username: "Rafe",
        age: 20,
        nationality: "England",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avangers EndGame",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Secret Eyes",
        yearOfPublication: 2009,
        isInTheaters: false
    },
    {
        id: 3,
        name: "Avatar",
        yearOfPublication: 2009,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Coringa",
        yearOfPublication: 2018,
        isInTheaters: true
    },
]

module.exports = {UserList, MovieList}