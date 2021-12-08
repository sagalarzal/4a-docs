const bookingResolver = {
  Query: {
    bookingByUsername: async ( _, { username },{ dataSources, userIdToken }) => {
      usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      if (username == usernameToken)
        return dataSources.bookingAPI.bookingByUsername(username);
      else return null;
    },
  },
  Mutation: {
    createBooking: async (_,{ booking },{ dataSources, userIdToken }) => {
      usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      if (booking.usernameOrigin == usernameToken)
        return dataSources.bookingAPI.createBooking(booking);
      else return null;
    },
  },
};

module.exports = bookingResolver;
