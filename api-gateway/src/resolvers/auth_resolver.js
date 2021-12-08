const usersResolver = {
  Query: {
    userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) return dataSources.authAPI.getUser(userId);
      else return null;
    },
  },
  Mutation: {
    signUpUser: async (_, { userInput }, { dataSources }) => {
      const authInput = {
        username: userInput.username,
        password: userInput.password,
        firstname: userInput.firstname,
        lastname: userInput.lastname,
        phone: userInput.phone,
        email: userInput.email,
      };
      return await dataSources.authAPI.createUser(authInput);
    },
    
    logIn: (_, { credentials }, { dataSources }) =>
      dataSources.authAPI.authRequest(credentials),

    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.authAPI.refreshToken(refresh),
  },
};

module.exports = usersResolver;
