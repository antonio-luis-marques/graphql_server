const { argsToArgsConfig } = require("graphql/type/definition");
const { UserList, MovieList } = require("../FakeData")


const resolvers = {
    Query: {
        users() {
            return UserList;
        },

        user (_, args) {
            return UserList.find(user => user.id == args.id);
        },

        movies(){
            return MovieList
        },

        movie(_, args) {
            return MovieList.find(movie => movie.name == args.name);
        }
    },

    User: {
        favoriteMovies(user) {
            return MovieList.filter(
              (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            );
        },
    },

    Mutation: {
        createUser(_,args){

            const user = args.input
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId+1
            UserList.push(user);
            return user
  
        },

        updateUsername(_,args){

            const {id, newUsername} = args.input
            let userUpdated
            UserList.forEach((user) => {
                if (user.id == Number(id)) {
                    user.username = newUsername
                    user = user
                    userUpdated = user
                }
            })

           return userUpdated
  
        },

        deleteUser(_, args) {
            const id = args.id;
            const userIndex = UserList.findIndex((user) => user.id === Number(id));
    
            if (userIndex === -1) {
                throw new Error("Usuário não encontrado");
            }
    
            const deletedUser = UserList.splice(userIndex, 1)[0];
            return deletedUser;
        }
    }
};

module.exports = {resolvers}