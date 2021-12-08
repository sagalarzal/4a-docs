//Se llama al typedef (esquema) de cada submodulo
const bookingTypeDefs = require('./booking_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, bookingTypeDefs];
//Se exportan

module.exports = schemasArrays;